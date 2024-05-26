function attachEvents() {
    // Fill Select Element:
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const selectElContainer = document.getElementById('posts');
    const promisePost = fetch(postUrl);
    document.getElementById('btnLoadPosts').addEventListener('click', () => {
        promisePost
            .then(resolve => resolve.json())
            .then(posts => {
                const fragmentElContainer = document.createDocumentFragment();

                Object.values(posts).forEach(post => {
                    const optionElement = document.createElement('option');
                    optionElement.textContent = post.title;
                    optionElement.value = post.id;

                    fragmentElContainer.appendChild(optionElement);
                });
                selectElContainer.appendChild(fragmentElContainer);
            })
            .catch(() => console.log('Something is wrong in (fill Select Els) operation!'));
    });

    // Show bodyText and comments after click view button:
    document.getElementById('btnViewPost').addEventListener('click', () => {
        Array.from(selectElContainer.children).forEach(option => {
            if (option.selected) {

                fetch(`http://localhost:3030/jsonstore/blog/posts/${option.value}`)
                    .then(resolve => resolve.json())
                    .then(data => {
                        document.getElementById('post-title').textContent = option.textContent;
                        document.getElementById('post-body').textContent = data.body;
                    })
                    .catch(() => console.log('error!'));

                fetch(`http://localhost:3030/jsonstore/blog/comments`)
                    .then(resolve => resolve.json())
                    .then(data => {
                        const ulElementContainer = document.getElementById('post-comments');
                        ulElementContainer.replaceChildren();

                        const fragmentElement = document.createDocumentFragment();
                        for (const obj in data) {
                            if (data[obj].postId == option.value) {

                                const liElement = document.createElement('li');
                                liElement.textContent = data[obj].text;
                                fragmentElement.appendChild(liElement)
                            }
                            ulElementContainer.appendChild(fragmentElement);
                        }
                    })
                    .catch(() => console.log('Something is wrong in (Show bodyText and comments) operation!'));
            }
        });
    });
}

attachEvents();
