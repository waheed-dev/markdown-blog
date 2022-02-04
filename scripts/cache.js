const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postData = () => {
    const posts = fs.readdirSync(path.join('posts'))
   const files = posts.map(fileName => {
        const markdownWithMeta = fs.readFileSync(path.join('posts',fileName),'utf-8')
        const slug = fileName.replace('.md','')
        const {data : frontMatter} = matter(markdownWithMeta)
        return {
            slug,
            frontMatter
        }
    })
    return `export const posts = ${JSON.stringify(files)}`
}
try {
    fs.readdirSync('cache')
} catch (error) {
    fs.mkdirSync('cache')
}
fs.writeFile('cache/data.js',postData(),function (e) {
    if (e) {
        console.log(e)
    } else {
        console.log('posts cached')
    }
})