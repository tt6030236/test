// assets/js/main.js

// Generate slug from pathname function with error handling
function generateSlug(pathname) {
    try {
        // If pathname is not a string or is empty, return a placeholder
        if (typeof pathname !== 'string' || pathname.trim() === '') {
            return 'channel-name';
        }

        // Remove leading and trailing slashes
        let cleanedPath = pathname.replace(/^\/+|\/+$/g, '');

        // If cleaned path is empty after trimming slashes, return a placeholder
        if (cleanedPath === '') {
            return 'channel-name';
        }

        // Convert to lowercase
        cleanedPath = cleanedPath.toLowerCase();

        // Replace spaces, underscores, or any non-alphanumeric character with a hyphen
        cleanedPath = cleanedPath.replace(/[^a-z0-9]+/g, '-');

        // Remove any trailing hyphens in case of consecutive non-alphanumeric characters
        cleanedPath = cleanedPath.replace(/^-+|-+$/g, '');

        // If the cleaned path is still empty after all the processing, return a placeholder
        if (cleanedPath === '') {
            return 'channel-name';
        }

        return cleanedPath; // Return the final, cleaned slug
    } catch (error) {
        // In case of any unexpected errors, return a safe placeholder
        console.error('Error generating slug:', error);
        return 'channel-name';
    }
}

// Get the current page URL
var currentUrl = window.location.href;

// Set the URL into the span with id="current-url"
document.getElementById('current-url').textContent = currentUrl;

// Set the link to the index.yaml file
document.querySelector("a[href*='index.yaml']").setAttribute('href', currentUrl + 'index.yaml');

// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();
