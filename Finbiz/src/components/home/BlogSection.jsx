import CommonHeading from '../commonComponents/CommonHeading'
import BlogBoxes from './BlogBoxes'
import images from "../../images/images"

const BlogSection = () => {
    return (
        <div className='mt-50 mb-20'>
            <div className="container">
                <CommonHeading
                    small='Blog & Article'
                    big='Recent Blog Post'
                    className='text-center'
                />

                <div className='grid lg:grid-cols-2 mt-10 gap-10'>
                    <BlogBoxes
                        img={images.blog1}
                        title='The quick settle tips of the new
                    ages exist'
                    />

                    <BlogBoxes
                        img={images.blog2}
                        title='Business is the practice of making money'
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogSection