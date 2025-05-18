
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    // I can add custom fields to each release here. 
    ReleasesYaml: {

      // A random generated field.
      generatedField: {
        type: "String",
        resolve: async (source, args, context, info) => {
          return Math.random().toString() + "______" + Math.random().toString();
        }
      }

      // Next … 
      // Get the image for this release based on the catalogue number.
      // Link an optional markdown blurb to the release.
    }
  };
  createResolvers(resolvers);
}