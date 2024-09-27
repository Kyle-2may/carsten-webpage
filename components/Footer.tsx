import React from 'react'

const Footer = () => {
  return (
    <div className="footer footer-text text-6xl pl-10 pt-10 bg5">
        <div className="cv-summary">
        <a className="cv-summary pb-10 col text-6xl font-bold">CV Summery</a>
        <div className='grid-cols-2'>
        <ul className='list-none pt-10 text-black grid-cols-2'>
        <li className="pb-4"><a className='font-bold'>Date of Birth</a> <a className='pl-12'>1968</a></li>
        <li className="pb-4"><a className='font-bold'>Languages</a> <a className='pl-16'>German, English, French(basic)</a></li>
        <li className="pb-4"><a className='font-bold'>1990 - 1994</a> <a className='pl-12'>Mechanical Engineer (Academy Lörrach, GER)Academy</a> </li>
        <li className="pb-4"><a className='font-bold'>1994 - 1998</a> <a className='pl-12'>Peguform GmbH</a></li>
        <li className="pb-4"><a className='font-bold'>1998 - 2001</a> <a className='pl-12'>Textron Automotive - NL </a></li>
        <li className="pb-4"><a className='font-bold'>2001 - 2013</a> <a className='pl-12'>Peguform GmbH (SMP)</a></li>
        <li className="pb-4"><a className='font-bold'>since 04/2013</a> <a className='pl-6'>Consultant, Program Mngr. & Development</a></li>
        </ul>
        </div>
        </div>
        <div className="pt-20">
        <a className="cv-summary pb-10 col text-6xl font-bold">Contact</a>
        <ul className='list-none pt-10 text-black'>
        <li className='font-bold'>Alte Poststraße 82</li>
        <li className='font-bold'>85598 Baldham</li>
        <li className='font-bold'>Germany</li>
        <li className='pt-8'><a className='font-bold'>Mobile:</a> <a className='font-base pl-8'>+49 172 7669667</a></li>
        <li className='pt-2 pb-8'><a className='font-bold'>Office:</a> <a className='font-base pl-10'>+49 89 12304345</a></li>
        <li className='font-bold'>Braeunling-Consulting@t-online.de</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer
