
import './Tabela-style.css'


function Tabela(){
    return(
     
<table>
  

    <tr>
  
      
    <th colSpan={2}>Horário de funcionamento</th>
   
    </tr>
  
  <div id="linhas">
    <tr>
      <tr>Segunda  <td> 9hr às 18hrs</td></tr>
      <tr>Terça   <td> 9hr às 18hrs</td></tr>
      <tr>Quarta   <td> 9hr às 18hrs</td></tr>
      <tr>Quinta   <td> 9hr às 18hrs</td></tr>
      <tr>Sexta   <td> 9hr às 18hrs</td></tr>
      <tr>Sábado   <td> 9hr às 18hrs</td></tr>
      <tr>Domingo   <td> 9hr às 18hrs</td></tr>
   
</tr>
</div>
</table>
);
}
export default Tabela;