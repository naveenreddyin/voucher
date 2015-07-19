<?php dpm($fields); ?>

<div>
    <?php print $fields["field_image_of_deal"]->content; ?>
</div>
<div>
    <?php print $fields["title"]->content; ?>
</div>
<div class="body">
    <?php print $fields["body"]->content; ?>
</div>
<div>
    <a href="<?php echo drupal_get_path_alias('node/'.$row->nid); ?>">
        <input type="button" value="show code"/>
    </a>
</div>
<div>
    <?php print $fields["term_node_tid"]->content; ?>
</div>
