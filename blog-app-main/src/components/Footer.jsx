import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  const handleSubscribe = () => {
    window.open('https://coding-nexus.mykajabi.com/opt-in', '_blank');
  };
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <div style={{width: '100%'}}>
  <MDBContainer className='p-4' style={{ width: '100%', maxWidth: '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto' }}>
        <MDBRow className='justify-content-center'>
          <MDBCol lg='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Coding Nexus</h5>

            <p>
            Coding Nexus: A hub for innovation, collaboration, and limitless possibilities.Dive into a world of comprehensive guides, step-by-step tutorials, and hands-on projects designed to empower your journey in mastering new skills and technologies.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Tutorials
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Courses
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Certifications
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Jobs
                </a>
              </li>
            </ul>
          </MDBCol>
          
          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Kharghar, Mumbai
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                coding@Nexus.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
        </MDBRow>
        
        <form action=''>
          <MDBRow>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            {/* <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol> */}

            <MDBCol size='auto' className='mb-4 mb-md-0' >
              <MDBBtn color='dark' onClick={handleSubscribe}>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
        </MDBContainer>
</div>

      {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='Coding Nexus'>
         Coding Nexus.com
        </a>
      </div> */}
    </MDBFooter>
  );
}