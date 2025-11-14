import React, { useEffect, useMemo, useState, useCallback } from "react";
import "./DriveGallery.css";

const FOLDER_ID = "1PFgUOQEW49BZnZcf0-qSIYhEZWUr9MZD";

export default function DriveGallery({ folderId = FOLDER_ID, pageSize = 100 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const apiKey = useMemo(() => import.meta.env.VITE_GOOGLE_API_KEY, []);

  const buildQueryUrl = useCallback((pageToken = "") => {
    const q = encodeURIComponent(
      `'${folderId}' in parents and trashed = false and mimeType contains 'image/'`
    );
    const fields = encodeURIComponent(
      "nextPageToken, files(id, name, mimeType, thumbnailLink)"
    );
    const base = "https://www.googleapis.com/drive/v3/files";
    const params = [
      `q=${q}`,
      `key=${apiKey}`,
      `fields=${fields}`,
      `pageSize=${pageSize}`,
      "supportsAllDrives=true",
      "includeItemsFromAllDrives=true",
      "orderBy=createdTime desc",
      pageToken ? `pageToken=${pageToken}` : "",
    ]
      .filter(Boolean)
      .join("&");

    return `${base}?${params}`;
  }, [apiKey, folderId, pageSize]);

  const toEmbedUrl = (fileId) =>
    `https://drive.google.com/uc?export=view&id=${fileId}`;

  const fetchAllImages = useCallback(async () => {
    if (!apiKey) {
      setErr("Missing Google API key. Add it to your .env file as VITE_GOOGLE_API_KEY.");
      return;
    }
    setLoading(true);
    setErr("");

    try {
      let pageToken = "";
      const all = [];

      do {
        const url = buildQueryUrl(pageToken);
        const res = await fetch(url);
        if (!res.ok) {
          const t = await res.text();
          throw new Error(`Drive API error ${res.status}: ${t}`);
        }
        const data = await res.json();
        const batch = (data.files || []).map((f) => ({
          id: f.id,
          name: f.name,
          thumb: f.thumbnailLink || toEmbedUrl(f.id),
          viewUrl: toEmbedUrl(f.id),
        }));
        all.push(...batch);
        pageToken = data.nextPageToken || "";
      } while (pageToken);

      setImages(all);
    } catch (e) {
      const msg = e?.message || "Failed to load images.";
      setErr(
        /permission|insufficient/i.test(msg)
          ? "Permission issue. Make sure the folder is shared 'Anyone with the link — Viewer'."
          : msg
      );
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [apiKey, buildQueryUrl]);

  useEffect(() => {
    fetchAllImages();
  }, [fetchAllImages]);

  const openModal = (i) => setActiveIndex(i);
  const closeModal = () => setActiveIndex(null);
  const prev = (e) => { e.stopPropagation(); setActiveIndex((i) => (i > 0 ? i - 1 : images.length - 1)); };
  const next = (e) => { e.stopPropagation(); setActiveIndex((i) => (i < images.length - 1 ? i + 1 : 0)); };

  return (
    <div className="drive-gallery">
      <div className="dg-head">
        <h2>Gallery</h2>
        {loading && <span className="dg-status">Loading…</span>}
        {err && <span className="dg-error">{err}</span>}
        {!loading && !err && <span className="dg-count">{images.length} images</span>}
      </div>

      <div className="dg-grid">
        {images.map((img, idx) => (
          <button
            key={img.id}
            className="dg-card"
            onClick={() => openModal(idx)}
            title={img.name}
          >
            <img loading="lazy" src={img.thumb} alt={img.name} />
            <div className="dg-name" aria-hidden>{img.name}</div>
          </button>
        ))}
      </div>

      {activeIndex !== null && images[activeIndex] && (
        <div className="dg-modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <button className="dg-close" aria-label="Close" onClick={closeModal}>×</button>
          <button className="dg-nav dg-prev" onClick={prev} aria-label="Previous">‹</button>
          <img className="dg-full" src={images[activeIndex].viewUrl} alt={images[activeIndex].name} />
          <button className="dg-nav dg-next" onClick={next} aria-label="Next">›</button>
          <div className="dg-caption">{images[activeIndex].name}</div>
        </div>
      )}
    </div>
  );
}
