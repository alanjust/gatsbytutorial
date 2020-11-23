import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'
const blog = () => {
    return (
    <Layout>
                <div className={styles.page}>
                <h1>This is our blog page.</h1>
                <p className={styles.text}>
                    Either the current working directory does not contain a valid package.json or 'gatsby' is not specified as a dependency. remote: Enumerating objects: 16, done. remote: Enumerating objects: 16, done. remote: Counting objects: 100% (16/16), done. remote: Compressing objects: 100% (11/11), done.
                </p>
                </div>
    </Layout>
    )
}

export default blog
