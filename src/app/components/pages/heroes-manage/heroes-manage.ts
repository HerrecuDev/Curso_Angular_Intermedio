import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-manage',
  imports: [CommonModule],
  templateUrl: './heroes-manage.html',
  styleUrl: './heroes-manage.css',
})
export class HeroesManage implements OnInit{

  public userList: User[] = [];

  constructor( private userService: UserService ){}

  ngOnInit(): void{
    this.userList = this.userService.getUsers();
  }

  
}
