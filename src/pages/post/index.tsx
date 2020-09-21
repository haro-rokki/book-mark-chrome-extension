import { NextPage } from 'next'
import { useState, useCallback } from 'react'

import { Editor } from '@/components/editor'
import { SiteHeader, SiteHeaderItem } from '@/components/site-header'
import { Button } from '@/components/button'

import styles from './index.module.css'

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const handleChangeSubject = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSubject(ev.target.value)
    },
    [],
  )

  const SiteHeaderRight = (
    <>
      <SiteHeaderItem>
        <Button type="submit">
          <span>投稿する</span>
        </Button>
      </SiteHeaderItem>
      <SiteHeaderItem>
        <img className={styles.userIcon} src="/profile.jpg" />
      </SiteHeaderItem>
    </>
  )

  return (
    <>
      <SiteHeader right={SiteHeaderRight} />
      <div className={styles.editContent}>
        <input
          className={styles.subject}
          type="text"
          placeholder="タイトル"
          value={subject}
          onChange={handleChangeSubject}
        />
        <Editor
          className={styles.editor}
          placeholder="本文を書きましょう"
          value={content}
          onEdit={setContent}
        />
      </div>
      <footer className={styles.footer}>
        <Button className={styles.submitButton}>投稿する</Button>
      </footer>
    </>
  )
}

export default PostPage
