<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card my-2">
                    <div class="card-header">
                        <h2 class="card-title">Create new link</h2>
                    </div>
                    <div class="card-content">
                        <b-form class="p-2" @submit="onSubmit" @reset="onReset">
                            <div class="my-2">
                                <b-form-group id="input-group" label="New url:" label-for="input-url">
                                    <b-form-input
                                        type="url"
                                        id="input-url"
                                        v-model="form.new_url"
                                        :class="validClass"
                                        required
                                    ></b-form-input>
                                    <div v-if="errors !== null && Object.keys(errors).includes('new_url')">
                                        <div v-for="error of errors.new_url" :key="error.index">
                                            <span class="text-danger error">{{ error }}<small></small></span>
                                        </div>
                                    </div>
                                </b-form-group>
                            </div>
                            <div class="my-2 text-center">
                                <b-button type="submit" variant="primary">Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </div>
                        </b-form>
                    </div>
                </div>
                <div v-if="links.length > 0" class="card">
                    <div class="card-header">
                        <h3 class="card-title">Registrated Links</h3>
                    </div>
                    <div class="card-content">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th v-for="header of headers" :key="header.key">
                                    {{ header.label }}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="row of links" :key="row.id">
                                <td v-for="header of headers" :key="header.key">
                                    <template v-if="header.key === 'code'">
                                        <a :href="row.link" @click="countRedirect(row)" target="_blank">
                                            {{ row[header.key] }} </a>
                                    </template>
                                    <template v-else>
                                        {{ row[header.key] }}
                                    </template>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                new_url: '',
            },
            headers: [
                {
                    key: 'code',
                    label: 'Short url',
                },
                {
                    key: 'count',
                    label: 'Amount redirected'
                }

            ],
            short_links: [],
            errors: null
        };
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            await this.$store.dispatch('links/newLink', {new_url: this.form.new_url});
            let data = await this.$store.getters['links/newLink'];
            if (Object.keys(data).includes('errors')) {
                this.errors = data.errors;
            } else {
                this.form.new_url = '';
                alert(data.message)
                await this.getLinksList();
            }
        },
        onReset(event) {
            event.preventDefault()
            this.form.new_url = ''

        },
        async getLinksList() {
            await this.$store.dispatch('links/link_list');
            this.short_links = this.$store.getters['links/link_list'];
        },
        async countRedirect(link) {
            await this.$store.dispatch('links/redirectedLink', link.id);
            await this.getLinksList();
        }
    },
    computed: {
        links() {
            return this.short_links;
        },
        validClass() {
            return this.errors !== null ? 'is-invalid' : '';
        }
    },
    async mounted() {
        await this.getLinksList();
    }
}
</script>
