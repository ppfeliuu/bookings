import React, { Component } from 'react';
import { Table, Divider, Row, Layout, Icon, Button  } from 'antd';
import SearchForm from './SearchForm';
const { Content } = Layout;



class BookingList extends Component {    
    
    
    constructor(props) {
        super(props);   

        this.state = { 
            bookings: this.props.data
        }
    }   

    setInitialState = () => {                   
        this.setState({
            bookings: this.props.data
        })
    }

    searchBookings = (busquedaFecha, busquedaEstado) => {
        const {fecha} = busquedaFecha;
        const {estado} = busquedaEstado        

        this.searchBy(fecha, estado);        
    }

    convertToDate(stringDate) {
        let dateParts = stringDate.split("/");            
        let dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); 
        return dateObject;
    }

    searchBy = (fecha, estado) => {
        
        const bookings = this.props.data;             

        this.setInitialState(); 
        
        let dateParts = fecha.split("/");            
        let dateFrom = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); 
               
        if (fecha === 'Invalid Date') fecha = ''
        if (estado === 'Todos') estado = ''

        if (fecha !== '') {                    

            this.setState({
                bookings: bookings.filter((item) => {
                    const itemDate = this.convertToDate(item.fecha);
                    return itemDate >= dateFrom
                })
            });        
        }   

        if (estado !== '') {            
            this.setState({
                bookings: bookings.filter((item) => item.estado === estado)
            });        
        }   

        if (fecha !== '' && estado !== '') {
            this.setState({
                bookings: bookings.filter((item) => {
                    const itemDate = this.convertToDate(item.fecha);
                    return itemDate >= dateFrom && item.estado === estado})
            });        
        } 
    }

       
   render() {    
       

      const columns = [
        {
          title: 'Fecha',
          dataIndex: 'fecha',        
         
        },
        {
            title: 'Ref',
            dataIndex: 'referencia',
        
          },
          {
            title: 'Cliente',
            dataIndex: 'cliente',
        
          },
          {
            title: 'Cantidad',
            dataIndex: 'adultos',
        
          },          
          {
            title: 'Estado',
            dataIndex: 'estado',
            render: text => (
                <span>            
                    <p>{text}</p>
                   
                   {text === 'No pagado' ? <Button type="primary">Confirmar Check-in</Button> : ''} 
                   
                </span>
            )
          },
          {
            title: 'Acciones',        
            render: () => (
              <span>
                <a href="!#"><Icon type="printer" style={{ fontSize: '22px' }}/></a>
                <Divider type="vertical" />
                <a href="!#"><Icon type="mail" style={{ fontSize: '22px' }}/></a>
                <Divider type="vertical" />
                <a href="!#"><Icon type="tool" style={{ fontSize: '22px' }}/></a>
                <Divider type="vertical" />
                <a href="!#"><Icon type="delete" style={{ fontSize: '22px' }}/></a>                
              </span>
            ),
          },
    ];

    return (          
        <div className="content-bookings">       
            <SearchForm searchBookings={this.searchBookings} />
            <Row>
                <Content style={{ padding: '10px 10px' }}>
                    <Table columns={columns} dataSource={this.state.bookings} bordered />
                </Content>
            </Row>              
        </div>        
        )
    }
}

export default BookingList;
