import React from 'react';
import Container from '../Container/Container';
import OptInForm from '../OptInForm/OptInForm';

function HomeOptInSection() {
  return (
    <section className={'w-full h-fit px-4 mb-[5rem] bg-accent/50'}>
      <Container>
        <OptInForm />
      </Container>
    </section>
  );
}

export default HomeOptInSection;
