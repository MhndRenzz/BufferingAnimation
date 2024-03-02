// Function to create buffering animation
function createBufferingAnimation(parentElementId, size, color) {
    const parentElement = document.getElementById(parentElementId);
    
    // Create buffering animation container
    const bufferingContainer = document.createElement('div');
    bufferingContainer.style.display = 'flex';
    bufferingContainer.style.justifyContent = 'center';
    bufferingContainer.style.alignItems = 'center';
    bufferingContainer.style.width = size + 'px';
    bufferingContainer.style.height = size + 'px';
    parentElement.appendChild(bufferingContainer);
    
    // Create buffering spinner
    const bufferingSpinner = document.createElement('div');
    bufferingSpinner.style.border = '4px solid rgba(0, 0, 0, 0.1)';
    bufferingSpinner.style.borderTop = '4px solid ' + color;
    bufferingSpinner.style.borderRadius = '50%';
    bufferingSpinner.style.width = size / 2 + 'px';
    bufferingSpinner.style.height = size / 2 + 'px';
    bufferingSpinner.style.animation = 'spin 1s linear infinite';
    bufferingContainer.appendChild(bufferingSpinner);
    
    // Add CSS animation keyframes
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Example usage
createBufferingAnimation('buffering-container', 60, 'blue');
