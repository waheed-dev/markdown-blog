import matter from "gray-matter";
import fs from 'fs'
import path from "path";

export default function handler(req, res) {
  let files
 if (process.env.NODE_ENV=== 'production') {

 } else {
   const posts = fs.readdirSync(path.join('posts'))
   files = posts.map(fileName => {
     const markdownWithMeta = fs.readFileSync(path.join('posts',fileName),'utf-8')
       const slug = fileName.replace('.md','')
     const {data : frontMatter} = matter(markdownWithMeta)
     return {
         slug,
       frontMatter
     }
   })
 }
 const results = files.filter(({frontMatter : {title,excerpt,category}}) => title.toLowerCase().indexOf(req.query.q) !== -1 ||
  excerpt.toLowerCase().indexOf(req.query.q) !== -1 ||
  category.toLowerCase().indexOf(req.query.q) !== -1
 )
  console.log(results)
  res.status(200).json(JSON.stringify({results}))
}
