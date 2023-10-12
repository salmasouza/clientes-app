import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase;

  //ou 
  //apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(private http : HttpClient) { }

  salvarCliente(cliente : Cliente) : Observable<Cliente>{
   

    return this.http.post<Cliente>(`${this.apiURL}/api/clientes`, cliente);
    
  } 

  getClientes() : Observable<Cliente[]> {
   
    return this.http.get<Cliente[]>(`${this.apiURL}/api/clientes`);
  
  }

  getClienteById(id : number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/api/clientes/${id}`);
  }

  atualizarCliente(cliente : Cliente) : Observable<Cliente>{

    return this.http.put<any>(`${this.apiURL}/api/clientes/${cliente.id}`, cliente);
    
  } 

  deletar(cliente : Cliente) : Observable<any>{

    return this.http.delete<any>(`${this.apiURL}/api/clientes/${cliente.id}`);
    
  } 




}
