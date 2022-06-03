import styles from './index.module.css'

const TcPatchNotes = ({ selectedClass }: { selectedClass: string }) => {
  const patchnotedModule = require(`../../../data/patch-notes/class-changes/classes/${selectedClass}`)
  const patchnotes: string[] = patchnotedModule.default.content

  return (
    <div className={styles.tcPatchNotes}>
      <div className={styles.tcPatchNotesHeader}>Patch Notes</div>
      <ul className={styles.tcPatchNotesUl}>
        {patchnotes.map((note, index) => (
          <li className={styles.tcPatchNotesLi} key={index}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TcPatchNotes
