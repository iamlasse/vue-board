<template>
   <b-tabs type="is-toggle-rounded" position="is-centered">
        <b-tab-item>
            <template slot="header">
                <b-icon icon="information-outline"></b-icon>
                <span> Issues <b-tag rounded> 3 </b-tag> </span>
            </template>
        </b-tab-item>
        <b-tab-item>
            <template slot="header">
                <b-icon icon="source-pull"></b-icon>
                <span> Pull Requests <b-tag rounded> 1 </b-tag> </span>
            </template>
            <b-collapse class="panel" :open.sync="isOpen">
            <div slot="trigger" class="panel-heading">
                <strong>Title</strong>
            </div>
            <p class="panel-tabs">
                <a class="is-active">All</a>
                <a>Public</a>
                <a>Private</a>
            </p>
            <div class="panel-block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </div>
        </b-collapse>
        </b-tab-item>
    </b-tabs>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .tags {
    float: right;
  }
</style>
