import React from 'react'
import AdmissionForm from '../../components/AdmissionForm/AdmissionForm'
import SectionTitle2 from '../../components/SectionTitle/SectionTitle2'

function Intrship() {
  return (
    <>
        <SectionTitle2 title="AdmissionForm" />
        <div className="mt-4">
            <AdmissionForm />
        </div>
    </>
  )
}

export default Intrship