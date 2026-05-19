import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/layout/header/header";
import { Navbar } from "./components/layout/navbar/navbar";
import { Footer } from "./components/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
