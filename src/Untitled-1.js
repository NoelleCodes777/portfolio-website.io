<Routes>
<Route
  exact
  path="/"
  element={
    <>
      <Frontpage />
      <About />
      <ProjectExp />
      <Contact />
      <Footer />
    </>
  }
/>
<Route
  exact
  path="/education_and_certifications"
  element={
    <>
      <EducationCert /> <Footer />
    </>
  }
/>
<Route
  exact
  path="/tech"
  element={
    <>
      <Skills />
      <Footer />
    </>
  }
/>
<Route  path="/admin/login" element={<Login />} />
<Route  path="/user-backend" element={<AdminUser />} />
</Routes>