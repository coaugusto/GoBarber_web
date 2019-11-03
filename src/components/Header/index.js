import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';

import logo from '~/assets/gobarber.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Carlos Augusto</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Carlos Augusto"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}