const createHighlightHandler = async (event) => {
    event.preventDefault();

    const user_id = document.querySelector("#user_id").value.trim();
    const message = document.querySelector("#message").value.trim();
    const video_url = document.querySelector("#videoLink").value.trim();

    if (user_id && message && video_url) {
        const response = await fetch ('/api/highlights/', {
            method: 'POST',
            body: JSON.stringify({ user_id, message, video_url }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.event-form')
  .addEventListener('submit', createHighlightHandler);