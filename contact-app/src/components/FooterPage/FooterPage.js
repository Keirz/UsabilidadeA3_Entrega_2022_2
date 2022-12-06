import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import './FooterPage.css'


export const FooterPage = () => {
  return (
    <footer>
    <CDBFooter className="shadow fixed-bottom">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="/imgs/favicon.png" width="30px" />
              <span className="ml-3 h5 font-weight-bold">ReforçA+</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              Software de Gestão de Alunos, Professores e Turmas para Empresas de Ensino particular.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            ReforçA+
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Contato</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Ajuda
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Suporte</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          
        </CDBBox>
        <small className="text-center mt-5">&copy; ReforçA+, 2022. CNPJ 00.000.000/0001-58</small>
      </CDBBox>
    </CDBFooter>
    </footer>
  );
};

export default FooterPage;