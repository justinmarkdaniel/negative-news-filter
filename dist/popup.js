"use strict";
// Popup script for API key configuration
document.addEventListener('DOMContentLoaded', async () => {
    console.log('[POPUP] Popup loaded');
    const apiKeyInput = document.getElementById('apiKey');
    const saveButton = document.getElementById('saveKey');
    const statusDiv = document.getElementById('status');
    const activateButton = document.getElementById('activateFilter');
    try {
        const { openaiApiKey } = (await chrome.storage.local.get('openaiApiKey'));
        if (openaiApiKey) {
            apiKeyInput.value = openaiApiKey;
            console.log('[POPUP] Loaded existing API key');
        }
    }
    catch (error) {
        console.error('[POPUP] Error loading API key:', error);
    }
    saveButton.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value.trim();
        if (!apiKey) {
            showStatus('Please enter an API key', 'error');
            return;
        }
        try {
            await chrome.storage.local.set({ openaiApiKey: apiKey });
            showStatus('API key saved successfully!', 'success');
            console.log('[POPUP] API key saved');
        }
        catch (error) {
            console.error('[POPUP] Error saving API key:', error);
            showStatus('Error saving API key', 'error');
        }
    });
    if (activateButton) {
        activateButton.addEventListener('click', async () => {
            try {
                const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
                if (!tab || tab.id === undefined) {
                    showStatus('No active tab found', 'error');
                    return;
                }
                console.log('[POPUP] Sending activate message to tab:', tab.id);
                const message = { action: 'activateFilter' };
                await chrome.tabs.sendMessage(tab.id, message);
                showStatus('Filter activated!', 'success');
            }
            catch (error) {
                const messageText = error instanceof Error ? error.message : String(error);
                console.error('[POPUP] Error activating filter:', error);
                showStatus('Error: ' + messageText, 'error');
            }
        });
    }
    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = 'status-message ' + type;
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'status-message';
        }, 3000);
    }
});
