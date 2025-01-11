import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  isSidebarClosed = false; // Tracks the sidebar state
  isDropdownOpen = false; // Tracks dropdown menu state

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  connect() {
    alert('Connect option clicked!');
  }

  createAccount() {
    alert('Create Account option clicked!');
  }

  manageAccount() {
    alert('Manage Account option clicked!');
  }
  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed; // Toggle the state
    const sidebar = document.querySelector('nav');
    if (sidebar) {
        sidebar.classList.toggle('close', this.isSidebarClosed);
    }
}
  ngAfterViewInit() {
      const body = document.querySelector('body');
      const sidebar = document.querySelector('nav');
      const toggle = document.querySelector('.toggle');
      const searchBtn = document.querySelector('.search-box');
      const modeSwitch = document.querySelector('.toggle-switch');
      const modeText = document.querySelector('.mode-text');

      toggle?.addEventListener('click', () => {
          sidebar?.classList.toggle('close');
      });

      searchBtn?.addEventListener('click', () => {
          sidebar?.classList.remove('close');
      });

      modeSwitch?.addEventListener('click', () => {
          body?.classList.toggle('dark');

          if (body?.classList.contains('dark')) {
              modeText!.innerHTML = 'Light mode';
          } else {
              modeText!.innerHTML = 'Dark mode';
          }
      });
  }
}