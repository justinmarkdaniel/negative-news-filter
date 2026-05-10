// Shared ambient types for the Positivity Filter extension.
// Declared globally (no imports) so each .ts file picks them up automatically
// when compiled together — keeps the source files standalone scripts (no ES
// module loading needed in MV3 content scripts).

interface Replacement {
    index: number;
    originalText: string;
    newText: string;
    reason?: string;
}

interface TextBlock {
    element: Element;
    text: string;
    tag: string;
    fontSize: number;
    position: { top: number; left: number };
}

interface PageContentBlock {
    index: number;
    text: string;
    tag: string;
    fontSize: number;
}

// Runtime message protocol between content script, popup, and background.
type FilterContentRequest = {
    action: 'filterContent';
    pageContent: PageContentBlock[];
    url: string;
};

type ActivateFilterRequest = {
    action: 'activateFilter';
};

type ExtensionRequest = FilterContentRequest | ActivateFilterRequest;

type FilterContentResponse =
    | { success: true; replacements: Replacement[] }
    | { success: false; error: string };

// Minimal OpenAI Chat Completions response shape — only the fields we read.
interface OpenAIChatResponse {
    choices: Array<{
        message: { role: string; content: string };
    }>;
    usage?: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}

interface OpenAIErrorResponse {
    error?: { message?: string; type?: string };
}

interface ApiKeyStorage {
    openaiApiKey?: string;
}
