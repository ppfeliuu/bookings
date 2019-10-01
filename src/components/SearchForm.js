import React, { useState } from 'react';
import { Select, DatePicker, Form, Button } from 'antd';
const { Option } = Select;


function SearchForm({searchBookings})  {   
    

    const [searchDate, saveSearchByDate] = useState({
        fecha: '',      
    })

    const [searchStatus, saveSearchByStatus] = useState({        
        estado: ''
    })

    const updateSearchDate = (e,dateValue) => {        
        saveSearchByDate({
            ...searchDate,
            'fecha': dateValue
        });
    }

    const updateSearchStatus = value => {        
        saveSearchByStatus({
            ...searchStatus,
            'estado': value
        });
    }

    const sendRequest = e => {
        e.preventDefault();
        searchBookings(searchDate, searchStatus);
    }

    return (
        <div>
            <Form onSubmit={sendRequest}>
                <div style={{ padding: '10px 10px' }}>
                
                    <DatePicker style={{ margin: '10px 10px' }} onChange={updateSearchDate} placeholder="Desde" format='DD/MM/YYYY'/>
                    
                    <Select defaultValue="Todos"                           
                        style={{ width: '20%' }}                                                                    
                        onChange={updateSearchStatus}
                        >
                        <Option value="Todos">Todos</Option>
                        <Option value="Pagado">Pagado</Option>
                        <Option value="No pagado">No pagado</Option>
                    </Select>              

                    <Button type="primary" htmlType="submit" icon="search" style={{ margin: '10px 10px' }}>
                        Buscar
                    </Button>
                </div>                       
            </Form>
        </div>
    )    
}

export default SearchForm;