
// skill code here
const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    function deactivateAll() {
      tabs.forEach(tab => tab.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
    }

    function activateTab(tab) {
      const targetId = tab.getAttribute('data-target');
      const target = document.getElementById(targetId);

      deactivateAll();
      tab.classList.add('active');
      target.classList.add('active');
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => activateTab(tab));
    });

    // Set first tab active by default
    activateTab(tabs[0]);




// project code here
function showContent(tabId) {
            document.querySelectorAll('.pt-content-container').forEach(content => {
                content.classList.remove('pt-content-active'); // Use NEW active class
            });
            // Target the NEW button class: .pt-tab-btn
            document.querySelectorAll('.pt-tab-btn').forEach(button => {
                button.classList.remove('pt-tab-active'); // Use NEW active class
            });

            // --- Step 2: Activate the selected content and button ---
            const activeContent = document.getElementById('content-' + tabId);
            const activeButton = document.getElementById('btn-' + tabId);

            if (activeContent) {
                activeContent.classList.add('pt-content-active'); // Use NEW active class
            }

            if (activeButton) {
                activeButton.classList.add('pt-tab-active'); // Use NEW active class
            }
        }
        
        window.onload = () => {
              showContent('projects'); // Sets 'projects' as default active tab
        };


        // open dialog box js
    const openButtons = document.querySelectorAll('.dialog-open-button');
    const closeButtons = document.querySelectorAll('.dialog-close-button');
    const dialogs = document.querySelectorAll('.dialog-overlay');

    const openDialog = (event) => {
        // --- START OF FIX ---
        const targetId = event.currentTarget.getAttribute('data-target'); // <-- ADDED/FIXED THIS LINE
        // --- END OF FIX ---
        
        const targetDialog = document.getElementById(targetId);

        if (targetDialog) {
            targetDialog.style.display = 'flex';
        }
    };

    const closeDialog = (dialogElement) => {
        dialogElement.style.display = 'none';
    };

    openButtons.forEach(button => {
        button.addEventListener('click', openDialog);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.currentTarget.getAttribute('data-close-target');
            const targetDialog = document.getElementById(targetId);

            if (targetDialog) {
                closeDialog(targetDialog);
            }
        });
    });

    dialogs.forEach(dialog => {
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
                closeDialog(dialog);
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const openDialog = document.querySelector('.dialog-overlay[style*="flex"]');
            if (openDialog) {
                closeDialog(openDialog);
            }
        }
    });