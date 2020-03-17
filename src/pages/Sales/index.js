import React,{useEffect,useState} from 'react';
import {formatPrice} from '../../util/format';
import { Container,SaleTable } from './styles';
import {MdDelete} from 'react-icons/md';
import produce from 'immer';
import api from '../../services/api';
import { toast } from 'react-toastify';
import {parseISO, format} from 'date-fns';

export default function Sales() {
  const [sales,setSales] = useState([]);
    
  useEffect(()=>{
    async function getAllSales(){
      const response = await api.get('/sales');
      const sales = response.data.map(sale => ({
        ...sale,
        totalPriceFormated: formatPrice(sale.total_price),
        saleDateFormated: format(parseISO(sale.sale_date),'dd/MM/YYY'),
      }))

      setSales(sales);
    }
    getAllSales();
  },[]);
  console.tron.log(sales);
  async function handleDelete(saleId){
    await api.delete(`/sales/${saleId}`);  
    const newSales = produce(sales, draft =>{
      const saleIndex = draft.findIndex(p => p.id === saleId);
        if(saleIndex >= 0){          
          draft.splice(saleIndex,1);          
        }
    });
    setSales(newSales);
    toast.success("Venda excluída com sucesso!");
  }
  
  return (   
<div className="rootContainer">
    <Container>       
        <div>        
        {sales.length > 0 && (
          <p>Foram localizadas um total de <strong>{sales.length}</strong> vendas</p>
        )}
        {sales.length === 0 && (
          <p>Nenhuma venda por em quanto.</p>
        )}
      </div>      
      <SaleTable>     
        <thead>
          <tr>            
            <th>Cliente</th>
            <th>Estimativa de entrega</th>
            <th>Data da venda</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>   
        <tbody>
          {sales.map(sale => (
            <tr key={sale.id}>
            <td>
              <strong>{sale.customer.name}</strong>              
            </td>
            <td>
          <strong>{sale.estimate_delivery} dias</strong>
            </td>
            <td>
              <strong>{sale.saleDateFormated}</strong>
             </td>
            <td>
              <strong>{sale.totalPriceFormated}</strong>
             </td>
             <td>
            <button onClick={() => handleDelete(sale.id)} type="button"><MdDelete size={20} color="#F11"/></button>
            </td>
          </tr>
          ))}          
        </tbody>
      </SaleTable>      
    </Container>
    </div>
  );
}
