import expendedPreview from './expended-preview.cmp.js'
import longText from './long-text.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
  template: `
    <section :class="{regular: email.isRead, expended: email.isExpended}" class="email-preview">
        <ul class="email-preview-content flex space-between align-center">
          <li>
            <span ref="star" class="star" :class="isEmailStarred" @click.stop="onStarClick(email.id)"></span>
            {{email.from}}
          </li>
          <li>{{email.subject}}</li>
          <li><long-text :txt="email.body"></long-text></li>
          <li>{{email.sentAt}}</li>
        </ul>
        <expended-preview v-if="email.isExpended" :email="email"></expended-preview>
    </section>
  `,
  
  components: {
    expendedPreview,
    longText
  },

  props: ['email'],

  data() {
    return {
      elPreview: null,
    }
  },

  mounted() {
    this.elPreview = this.$refs.star
  },

  computed: {
    isEmailStarred() {
      if (this.email.isStarred) return 'star fa fa-star'
      if (!this.email.isStarred) return 'star fa fa-star-o'
    }
  },

  methods: {
    onStarClick(emailId) {
      let currEmail = emailService.toggleEmailStar(emailId)
      this.$refs.star.className = currEmail.isStarred ? 'star fa fa-star' : 'star fa fa-star-o'
    }
  }
}