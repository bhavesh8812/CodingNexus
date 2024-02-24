import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterCopyright() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-white text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%',expand:'xxl' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='Coding Nexus'>
          Coding Nexus.com
        </a>
      </div>
    </MDBFooter>
  );
}