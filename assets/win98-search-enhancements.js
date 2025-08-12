/**
 * Win98 Search Dialog Enhancements
 * Adds Windows 98-like behavior to the search dialog
 */

class Win98SearchDialog {
  constructor() {
    this.searchModal = document.querySelector('.search-modal');
    this.searchInput = document.querySelector('.search__input');
    this.searchButton = document.querySelector('.search__button');
    this.resetButton = document.querySelector('.reset__button');
    this.closeButton = document.querySelector('.search-modal__close-button');
    this.statusBar = document.querySelector('.predictive-search-status');
    
    this.init();
  }
  
  init() {
    this.setupStatusBar();
    this.setupSearchBehavior();
    this.setupKeyboardShortcuts();
    this.setupWindowBehavior();
  }
  
  setupStatusBar() {
    if (!this.statusBar) return;
    
    // Update status bar based on search state
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => {
        const query = this.searchInput.value.trim();
        if (query.length > 0) {
          this.updateStatusBar(`Searching for "${query}"...`);
        } else {
          this.updateStatusBar('Ready');
        }
      });
      
      this.searchInput.addEventListener('focus', () => {
        this.updateStatusBar('Enter search terms');
      });
      
      this.searchInput.addEventListener('blur', () => {
        const query = this.searchInput.value.trim();
        if (query.length === 0) {
          this.updateStatusBar('Ready');
        }
      });
    }
  }
  
  updateStatusBar(message) {
    if (this.statusBar) {
      // Clear existing content
      this.statusBar.innerHTML = '';
      
      // Add status icon and message
      const statusText = document.createElement('span');
      statusText.textContent = message;
      statusText.style.color = '#000';
      statusText.style.fontFamily = '"MS Sans Serif", sans-serif';
      statusText.style.fontSize = '10px';
      
      this.statusBar.appendChild(statusText);
    }
  }
  
  setupSearchBehavior() {
    // Add Win98-style search feedback
    if (this.searchButton) {
      this.searchButton.addEventListener('click', (e) => {
        this.updateStatusBar('Searching...');
        this.addSearchingAnimation();
      });
    }
    
    // Enhanced reset behavior
    if (this.resetButton) {
      this.resetButton.addEventListener('click', () => {
        this.updateStatusBar('Search cleared');
        setTimeout(() => {
          this.updateStatusBar('Ready');
        }, 1000);
      });
    }
  }
  
  addSearchingAnimation() {
    // Add a simple "searching" animation to the search button
    if (this.searchButton) {
      const originalText = this.searchButton.textContent || 'Search Now';
      let dots = '';
      
      const animate = () => {
        dots = dots.length >= 3 ? '' : dots + '.';
        if (this.searchButton.querySelector('::after')) {
          // This is a CSS pseudo-element, so we'll use a different approach
          this.searchButton.setAttribute('data-searching', dots);
        }
      };
      
      const animationInterval = setInterval(animate, 500);
      
      // Stop animation after 3 seconds
      setTimeout(() => {
        clearInterval(animationInterval);
        if (this.searchButton) {
          this.searchButton.removeAttribute('data-searching');
        }
        this.updateStatusBar('Search complete');
      }, 3000);
    }
  }
  
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Win98-style keyboard shortcuts
      if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        this.openSearchDialog();
      }
      
      // Escape to close dialog
      if (e.key === 'Escape' && this.isSearchDialogOpen()) {
        this.closeSearchDialog();
      }
      
      // Enter in search input
      if (e.key === 'Enter' && e.target === this.searchInput) {
        e.preventDefault();
        if (this.searchButton) {
          this.searchButton.click();
        }
      }
    });
  }
  
  setupWindowBehavior() {
    // Add window dragging behavior to title bar (if we had a proper title bar element)
    // This would require modifying the HTML structure to add a draggable title bar
    
    // Add double-click to maximize behavior
    if (this.searchModal) {
      const titleBar = this.searchModal.querySelector('.search-modal__content::before');
      // Since ::before is a pseudo-element, we'll add the behavior to the modal content
      const modalContent = this.searchModal.querySelector('.search-modal__content');
      
      if (modalContent) {
        modalContent.addEventListener('dblclick', (e) => {
          // Only trigger on title bar area (top 20px)
          const rect = modalContent.getBoundingClientRect();
          if (e.clientY - rect.top <= 20) {
            this.toggleMaximize();
          }
        });
      }
    }
  }
  
  toggleMaximize() {
    if (!this.searchModal) return;
    
    const modalContent = this.searchModal.querySelector('.search-modal__content');
    if (!modalContent) return;
    
    // Toggle maximized state
    const isMaximized = modalContent.classList.contains('win98-maximized');
    
    if (isMaximized) {
      modalContent.classList.remove('win98-maximized');
      modalContent.style.width = '';
      modalContent.style.height = '';
      modalContent.style.maxWidth = '600px';
      modalContent.style.maxHeight = '80vh';
    } else {
      modalContent.classList.add('win98-maximized');
      modalContent.style.width = '95vw';
      modalContent.style.height = '90vh';
      modalContent.style.maxWidth = 'none';
      modalContent.style.maxHeight = 'none';
    }
  }
  
  openSearchDialog() {
    // Trigger the search modal if it exists
    const searchToggle = document.querySelector('.header__icon--search');
    if (searchToggle) {
      searchToggle.click();
    }
  }
  
  closeSearchDialog() {
    if (this.closeButton) {
      this.closeButton.click();
    }
  }
  
  isSearchDialogOpen() {
    if (!this.searchModal) return false;
    const details = this.searchModal.closest('details');
    return details ? details.open : false;
  }
  
  // Add system sound simulation (Win98 had distinctive sounds)
  playSystemSound(soundType) {
    // In a real implementation, you might want to add actual sound files
    // For now, we'll just add visual feedback
    console.log(`🔊 Win98 ${soundType} sound`);
    
    // Add a brief visual feedback
    if (this.statusBar) {
      const originalBg = this.statusBar.style.backgroundColor;
      this.statusBar.style.backgroundColor = '#ffff00';
      setTimeout(() => {
        this.statusBar.style.backgroundColor = originalBg;
      }, 100);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.win98SearchDialog = new Win98SearchDialog();
});

// Also initialize when the search modal is loaded dynamically
document.addEventListener('shopify:section:load', (e) => {
  if (e.detail.sectionId.includes('header')) {
    window.win98SearchDialog = new Win98SearchDialog();
  }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Win98SearchDialog;
}