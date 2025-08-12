/**
 * Win98 Taskbar JavaScript
 * Handles Start menu interactions, system tray, and clock functionality
 */

class Win98Taskbar {
  constructor() {
    this.startButton = document.getElementById('start-button');
    this.startMenu = document.getElementById('start-menu');
    this.searchButton = document.getElementById('search-button');
    this.searchDialog = document.getElementById('search-dialog');
    this.closeSearchButton = document.getElementById('close-search');
    this.cancelSearchButton = document.getElementById('cancel-search');
    this.cartButton = document.getElementById('cart-button');
    this.systemClock = document.getElementById('system-clock');
    
    this.init();
  }
  
  init() {
    this.setupStartMenu();
    this.setupSearchDialog();
    this.setupCartButton();
    this.setupSystemClock();
    this.setupClickOutside();
    this.setupKeyboardNavigation();
    this.updateMobileAttribute();
    this.updateBodyPadding();
  }
  
  setupStartMenu() {
    if (!this.startButton || !this.startMenu) return;
    
    this.startButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleStartMenu();
    });
    
    // Handle submenu hover delays
    const menuItems = this.startMenu.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      const submenu = item.querySelector('.submenu');
      if (submenu) {
        let hoverTimeout;
        
        item.addEventListener('mouseenter', () => {
          clearTimeout(hoverTimeout);
          hoverTimeout = setTimeout(() => {
            submenu.style.display = 'block';
          }, 100);
        });
        
        item.addEventListener('mouseleave', () => {
          clearTimeout(hoverTimeout);
          setTimeout(() => {
            if (!item.matches(':hover')) {
              submenu.style.display = 'none';
            }
          }, 200);
        });
      }
    });
  }
  
  setupSearchDialog() {
    if (this.searchButton && this.searchDialog) {
      this.searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSearchDialog();
      });
    }
    
    if (this.closeSearchButton) {
      this.closeSearchButton.addEventListener('click', () => {
        this.closeSearchDialog();
      });
    }
    
    if (this.cancelSearchButton) {
      this.cancelSearchButton.addEventListener('click', () => {
        this.closeSearchDialog();
      });
    }
    
    // Close search on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.searchDialog && this.searchDialog.style.display !== 'none') {
        this.closeSearchDialog();
      }
    });
  }
  
  setupCartButton() {
    if (this.cartButton) {
      this.cartButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.openCartDrawer();
      });
    }
  }
  
  setupSystemClock() {
    if (!this.systemClock) return;
    
    this.updateClock();
    setInterval(() => this.updateClock(), 60000); // Update every minute
    
    // Show date/time tooltip on hover
    this.systemClock.addEventListener('click', () => {
      const now = new Date();
      const fullDate = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      const fullTime = now.toLocaleTimeString('en-US');
      
      alert(`${fullDate}\n${fullTime}`);
    });
  }
  
  setupClickOutside() {
    document.addEventListener('click', (e) => {
      // Close start menu if clicking outside
      if (this.startMenu && 
          !this.startButton.contains(e.target) && 
          !this.startMenu.contains(e.target)) {
        this.closeStartMenu();
      }
      
      // Close search dialog if clicking outside
      if (this.searchDialog && 
          this.searchDialog.style.display !== 'none' &&
          !this.searchDialog.contains(e.target) &&
          !this.searchButton.contains(e.target)) {
        this.closeSearchDialog();
      }
    });
  }
  
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Toggle start menu with Windows key or Ctrl+Esc
      if ((e.key === 'Meta' || (e.ctrlKey && e.key === 'Escape')) && this.startButton) {
        e.preventDefault();
        this.toggleStartMenu();
      }
      
      // Close start menu with Escape
      if (e.key === 'Escape' && this.isStartMenuOpen()) {
        this.closeStartMenu();
      }
    });
  }
  
  updateMobileAttribute() {
    const taskbar = document.getElementById('win98-taskbar');
    const section = taskbar?.closest('.win98-taskbar-section');
    
    if (taskbar && section) {
      const mobileBehavior = section.dataset.mobileBehavior || 'mini';
      taskbar.setAttribute('data-mobile', mobileBehavior);
    }
  }
  
  updateBodyPadding() {
    const taskbar = document.getElementById('win98-taskbar');
    const section = taskbar?.closest('.win98-taskbar-section');
    
    if (taskbar) {
      const taskbarHeight = taskbar.style.getPropertyValue('--taskbar-height') || '28px';
      const position = section?.dataset.position || 'bottom';
      
      if (position === 'top') {
        document.body.style.paddingTop = `calc(${taskbarHeight} + 2px)`;
        document.body.style.paddingBottom = '';
      } else {
        document.body.style.paddingBottom = `calc(${taskbarHeight} + 2px)`;
        document.body.style.paddingTop = '';
      }
    }
  }
  
  toggleStartMenu() {
    if (this.isStartMenuOpen()) {
      this.closeStartMenu();
    } else {
      this.openStartMenu();
    }
  }
  
  openStartMenu() {
    if (!this.startMenu || !this.startButton) return;
    
    this.startMenu.style.display = 'block';
    this.startMenu.setAttribute('aria-hidden', 'false');
    this.startButton.setAttribute('aria-expanded', 'true');
    
    // Focus first menu item
    const firstMenuItem = this.startMenu.querySelector('.menu-link');
    if (firstMenuItem) {
      firstMenuItem.focus();
    }
  }
  
  closeStartMenu() {
    if (!this.startMenu || !this.startButton) return;
    
    this.startMenu.style.display = 'none';
    this.startMenu.setAttribute('aria-hidden', 'true');
    this.startButton.setAttribute('aria-expanded', 'false');
    
    // Hide all submenus
    const submenus = this.startMenu.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
      submenu.style.display = 'none';
    });
  }
  
  isStartMenuOpen() {
    return this.startMenu && this.startMenu.style.display === 'block';
  }
  
  openSearchDialog() {
    if (!this.searchDialog) return;
    
    this.searchDialog.style.display = 'block';
    
    // Focus search input
    const searchInput = this.searchDialog.querySelector('#search-input');
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }
  
  closeSearchDialog() {
    if (!this.searchDialog) return;
    
    this.searchDialog.style.display = 'none';
    
    // Clear search input
    const searchInput = this.searchDialog.querySelector('#search-input');
    if (searchInput) {
      searchInput.value = '';
    }
  }
  
  openCartDrawer() {
    // Try multiple methods to open cart drawer
    const cartDrawer = document.querySelector('cart-drawer');
    if (cartDrawer) {
      // Method 1: Call open method if it exists
      if (typeof cartDrawer.open === 'function') {
        cartDrawer.open();
        return;
      }
      
      // Method 2: Dispatch custom event
      cartDrawer.dispatchEvent(new CustomEvent('cart:open'));
      
      // Method 3: Click cart icon if it exists
      const cartIcon = document.querySelector('[data-cart-drawer]') || 
                       document.querySelector('.cart-icon-bubble') ||
                       document.querySelector('[href="/cart"]');
      if (cartIcon) {
        cartIcon.click();
        return;
      }
    }
    
    // Fallback: Navigate to cart page
    window.location.href = '/cart';
  }
  
  updateClock() {
    if (!this.systemClock) return;
    
    const now = new Date();
    const timeElement = this.systemClock.querySelector('.clock-time');
    const dateElement = this.systemClock.querySelector('.clock-date');
    
    if (timeElement) {
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }).replace(' AM', '').replace(' PM', '');
      timeElement.textContent = timeString;
    }
    
    if (dateElement) {
      const dateString = `${now.getMonth() + 1}/${now.getDate()}`;
      dateElement.textContent = dateString;
    }
  }
  
  // Public methods for external access
  showNotification(message) {
    // Simple notification system - could be expanded
    const notification = document.createElement('div');
    notification.className = 'taskbar-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 35px;
      right: 10px;
      background: #ffffcc;
      border: 2px outset #ffffcc;
      padding: 8px 12px;
      font-family: "MS Sans Serif", sans-serif;
      font-size: 11px;
      z-index: 1004;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }
  
  addTaskbarApp(name, icon, url) {
    const appsContainer = document.querySelector('.taskbar-apps');
    if (!appsContainer) return;
    
    const app = document.createElement('div');
    app.className = 'taskbar-app';
    app.innerHTML = `
      <img src="${icon}" alt="" class="app-icon">
      <span class="app-text">${name}</span>
    `;
    
    if (url) {
      app.addEventListener('click', () => {
        window.location.href = url;
      });
    }
    
    appsContainer.appendChild(app);
    return app;
  }
  
  removeTaskbarApp(app) {
    if (app && app.parentNode) {
      app.parentNode.removeChild(app);
    }
  }
}

// Initialize taskbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.win98Taskbar = new Win98Taskbar();
});

// Handle dynamic content loading (for AJAX/SPA scenarios)
document.addEventListener('shopify:section:load', (e) => {
  if (e.detail.sectionId.includes('win98-taskbar')) {
    window.win98Taskbar = new Win98Taskbar();
  }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Win98Taskbar;
}