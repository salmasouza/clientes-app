import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http : HttpClient) { }

  salvarCliente(cliente : Cliente) : Observable<Cliente>{

    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
    
  } 

  getClientes() : Observable<Cliente[]> {

    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  
  }

  getClienteById(id : number) : Observable<Cliente> {
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  atualizarCliente(cliente : Cliente) : Observable<Cliente>{

    return this.http.put<any>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
    
  } 

  deletar(cliente : Cliente) : Observable<any>{

    return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
    
  } 




}
