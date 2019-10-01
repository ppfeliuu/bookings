import React from "react";
import { Menu, Icon } from "antd";


export default function Navbar() {
  return (            
      <Menu className="Bookings-header"             
          mode="horizontal"
        >
          <Menu.Item key="company">
            <Icon type="home" />
              Compañía
          </Menu.Item>

          <Menu.Item key="services">
            <Icon type="read" />
              Servicios
          </Menu.Item>

          <Menu.Item key="marketplace">
            <Icon type="appstore" />
              Marketplace
          </Menu.Item>

          <Menu.Item key="bookings">
            <Icon type="wallet" />
              Reservas
          </Menu.Item>

          <Menu.Item key="calendar">
            <Icon type="calendar" />
              Calendario
          </Menu.Item>

          <Menu.Item key="translate">
            <Icon type="transaction" />
              Traducir
          </Menu.Item>

          <Menu.Item key="design">
              <Icon type="highlight" />
              Diseño
          </Menu.Item>

          <Menu.Item key="statistics">
            <Icon type="fund" />
              Estadísticas
          </Menu.Item>

          <Menu.Item key="more">
            <Icon type="plus" />
              Más
          </Menu.Item>
        </Menu>
  );
}
