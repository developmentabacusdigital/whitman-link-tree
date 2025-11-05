// Share functionality
document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.getElementById('shareBtn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            shareProfile();
        });
    }
});

function shareProfile() {
    const pageUrl = window.location.href;
    const pageTitle = 'Whitman Controls';
    const pageDescription = 'Veteran-owned and trusted for 40+ years, Whitman Controls delivers custom-built, high-quality switches and sensors.';

    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: pageTitle,
            text: pageDescription,
            url: pageUrl
        }).catch(err => {
            if (err.name !== 'AbortError') {
                console.error('Error sharing:', err);
                fallbackShare(pageUrl, pageTitle, pageDescription);
            }
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        fallbackShare(pageUrl, pageTitle, pageDescription);
    }
}

function fallbackShare(url, title, description) {
    // Create a modal or use copy to clipboard
    const shareOptions = `
        <div class="share-modal">
            <div class="share-modal-content">
                <h3>Share Whitman Controls</h3>
                <div class="share-options">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" class="share-option facebook">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(description)}" target="_blank" class="share-option twitter">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M21 20.5a.5.5 0 11-1 0 .5.5 0 011 0z"/>
                        </svg>
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank" class="share-option linkedin">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.737h3.554v1.378c-.009.015-.021.029-.032.042h.032v-.042c.43-.664 1.199-1.61 2.92-1.61 2.135 0 3.731 1.395 3.731 4.397v5.572zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.957-1.71 1.187 0 1.915.759 1.915 1.71 0 .951-.728 1.71-1.957 1.71zm1.582 11.597H3.635V9.57h3.284v10.882zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                    <button class="share-option copy-link" onclick="copyToClipboard('${url}')">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        Copy Link
                    </button>
                </div>
                <button class="share-close" onclick="closeShareModal()">✕</button>
            </div>
        </div>
    `;

    // Remove existing modal if present
    const existingModal = document.querySelector('.share-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = shareOptions;
    document.body.appendChild(modalContainer);

    // Add modal styles dynamically
    addModalStyles();
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function() {
            showToast('Link copied to clipboard!');
            closeShareModal();
        }).catch(function(err) {
            console.error('Failed to copy:', err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showToast('Link copied to clipboard!');
        closeShareModal();
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy link');
    }
    document.body.removeChild(textArea);
}

function closeShareModal() {
    const modal = document.querySelector('.share-modal');
    if (modal) {
        modal.classList.add('fade-out');
        setTimeout(function() {
            modal.remove();
        }, 300);
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.classList.add('fade-out');
        setTimeout(function() {
            toast.remove();
        }, 300);
    }, 2500);
}

function addModalStyles() {
    if (document.getElementById('share-modal-styles')) {
        return;
    }

    const style = document.createElement('style');
    style.id = 'share-modal-styles';
    style.textContent = `
        .share-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .share-modal.fade-out {
            animation: fadeOut 0.3s ease-out forwards;
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }

        .share-modal-content {
            background: white;
            border-radius: 16px;
            padding: 30px;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .share-modal-content h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #1a1a1a;
        }

        .share-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 10px;
        }

        .share-option {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 16px;
            border-radius: 12px;
            text-decoration: none;
            color: white;
            font-weight: 600;
            font-size: 13px;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
        }

        .share-option:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .share-option svg {
            width: 24px;
            height: 24px;
            margin-bottom: 8px;
        }

        .share-option.facebook {
            background: #1877F2;
        }

        .share-option.twitter {
            background: #1DA1F2;
        }

        .share-option.linkedin {
            background: #0A66C2;
        }

        .share-option.copy-link {
            background: #666;
            color: white;
        }

        .share-close {
            position: absolute;
            top: 12px;
            right: 12px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .share-close:hover {
            color: #333;
            transform: rotate(90deg);
        }

        @media (max-width: 500px) {
            .share-modal-content {
                padding: 24px;
            }

            .share-options {
                grid-template-columns: 1fr 1fr;
            }

            .share-option {
                padding: 14px;
                font-size: 12px;
            }

            .share-option svg {
                width: 20px;
                height: 20px;
                margin-bottom: 6px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.querySelector('.share-modal');
    if (modal && event.target === modal) {
        closeShareModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeShareModal();
    }
});
