module.exports = {
  meta: {},
  create: function (context) {
    return {
      VariableDeclarator: function(node) {
        if(node.id.name.length < 2){
            context.report(node, 'Variable names should be longer than 1 character');
        }
      }
    }
  }
}
