import React from 'react'

import styles from './index.module.css'

interface ParagraphProps {
	title: string
	content: string[]
}

const Paragraph: React.FC<ParagraphProps> = ({ title, content }) => {
	return (
		<div className={styles.paragraph}>
			<h4>{title}</h4>
			<ul>
				{content.map((bullet, index) => (
					<li key={index}>{bullet}</li>
				))}
			</ul>
		</div>
	)
}

export default Paragraph
