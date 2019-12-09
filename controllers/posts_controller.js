// Temp till db is set up
const posts = [];

// All posts
const index = router.get('/posts', (req, res) => {
    res.render('posts/index', { posts });
})

// New post
const newPost = router.get('/posts/new', (req, res) => {
    res.render('posts/form');
})

// Create post
const create = router.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const post = { title, content };
    posts.push(post);
    res.redirect('/posts');
})

// Show post
const show = router.get('posts/:id', (req, res) => {

})

// Edit post
const edit = router.get('posts/:id/edit', (req, res) => {

})

// Update post
const update = router.patch('/posts/:id', (req, res) => {

})

// Delete post
const destroy = router.delete('/posts/:id', (req, res) => {

})

module.exports = {
    index,
    newPost,
    create,
    show,
    edit,
    update,
    destroy
};