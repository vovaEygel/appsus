import noteImg from '../cmps/note-img.cmp.js'
import noteVideo from '../cmps/note-video.cmp.js'
import noteText from '../cmps/note-txt.cmp.js'
import noteTodos from '../cmps/note-todos.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import noteSearch from '../cmps/note-search.cmp.js'
import { noteService } from '../services/missKeep-service.js'

//=========================================================================================>

export default {
    template: `
        <section class="notes">
            <note-search></note-search>
            <add-note></add-note>
        <ul>
        <li v-if="notes" v-for="note in notes">
            <component
              :is="note.type"
              :info="note.info">
             </component>
            </li>
        </ul>
        </section>
`,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.getNotes().then(notes => this.notes = notes)
        console.log(this.notes)
    },
    methods: {
        setAns(idx, ans) {
            this.results.splice(idx, 1, ans)
        }
    },
    components: {
        noteImg,
        noteVideo,
        noteText,
        noteTodos,
        addNote,
        noteSearch
    }
}