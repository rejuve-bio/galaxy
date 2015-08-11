define(["utils/utils"],function(a){return Backbone.View.extend({initialize:function(b){this.options=a.merge(b,{class_add:"upload-icon-button fa fa-square-o",class_remove:"upload-icon-button fa fa-check-square-o",class_partial:"upload-icon-button fa fa-minus-square-o",collection:null,onchange:function(){},onadd:function(){},onremove:function(){}});var c=this;this.collection=this.options.collection,this.setElement(this._template()),this.rows=[],a.get({url:galaxy_config.root+"api/remote_files",success:function(a){c._fill(a)},error:function(){c._fill()}})},events:{mousedown:function(a){a.preventDefault()}},_fill:function(b){if(b&&b.length>0){this.$el.find("#upload-ftp-content").html($(this._templateTable()));var c=0;for(index in b)this.rows.push(this._add(b[index])),c+=b[index].size;if(this.$el.find("#upload-ftp-number").html(b.length+" files"),this.$el.find("#upload-ftp-disk").html(a.bytesToString(c,!0)),this.collection){var d=this;this.$select_all=$("#upload-selectall"),this.$select_all.addClass(this.options.class_add),this.$select_all.on("click",function(){var a=d.$select_all.hasClass(d.options.class_add);for(index in b){var c=b[index],e=d._find(c);(!e&&a||e&&!a)&&d.rows[index].trigger("click")}}),this._refresh(),this.$("._has_collection").show()}}else this.$el.find("#upload-ftp-content").html($(this._templateInfo()));this.$el.find("#upload-ftp-wait").hide()},_add:function(a){var b=this,c=$(this._templateRow(a)),d=c.find(".icon");if($(this.el).find("tbody").append(c),this.collection){var e="";e=this._find(a)?this.options.class_remove:this.options.class_add,d.addClass(e),c.on("click",function(){var c=b._find(a);d.removeClass(),c&&b.options.remove?(b.options.onremove(c),d.addClass(b.options.class_add)):(b.options.onadd(a),d.addClass(b.options.class_remove)),b._refresh()})}else c.on("dblclick",function(){b.options.onchange(a)});return c},_refresh:function(){var a=this.collection.where({file_mode:"ftp",enabled:!0});this.$select_all.removeClass(),this.$select_all.addClass(0==a.length?this.options.class_add:a.length==this.rows.length?this.options.class_remove:this.options.class_partial)},_find:function(a){var b=this.collection.findWhere({file_path:a.path,file_mode:"ftp",enabled:!0});return b?b.get("id"):null},_templateRow:function(b){return'<tr class="upload-ftp-row"><td class="_has_collection" style="display: none;"><div class="icon"/></td><td class="label"><p>'+b.path+'</p></td><td class="nonlabel">'+a.bytesToString(b.size)+'</td><td class="nonlabel">'+b.ctime+"</td></tr>"},_templateTable:function(){return'<span style="whitespace: nowrap; float: left;">Available files: </span><span style="whitespace: nowrap; float: right;"><span class="upload-icon fa fa-file-text-o"/><span id="upload-ftp-number"/>&nbsp;&nbsp;<span class="upload-icon fa fa-hdd-o"/><span id="upload-ftp-disk"/></span><table class="grid" style="float: left;"><thead><tr><th class="_has_collection" style="display: none;"><div id="upload-selectall"></th><th>Name</th><th>Size</th><th>Created</th></tr></thead><tbody/></table>'},_templateInfo:function(){return'<div class="upload-ftp-warning warningmessage">Your FTP directory does not contain any files.</div>'},_template:function(){return'<div class="upload-ftp"><div id="upload-ftp-wait" class="upload-ftp-wait fa fa-spinner fa-spin"/><div class="upload-ftp-help">This Galaxy server allows you to upload files via FTP. To upload some files, log in to the FTP server at <strong>'+this.options.ftp_upload_site+'</strong> using your Galaxy credentials (email address and password).</div><div id="upload-ftp-content"/><div>'}})});
//# sourceMappingURL=../../../maps/mvc/upload/upload-ftp.js.map