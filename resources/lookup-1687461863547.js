(function(window, undefined) {
  var dictionary = {
    "1ac0f074-6a7f-4395-8273-fb6f45543ddd": "3D",
    "f8cde7f6-98f2-452a-9839-fbcd9ae72f07": "HOTELS",
    "2ca772d8-21da-4838-b849-9e1fbe6a8862": "COTTEL",
    "4e688d70-9b91-41e9-8ec7-ff4afed841ab": "BANQUET HALLS",
    "2c409bcd-cd59-4b59-ae0d-11cee5e32191": "AUDITORIUMS",
    "4a754f0e-08cf-4e2f-9e10-2907d558bb0f": "RESIDENCES",
    "01c8b94f-ca9f-48db-9b37-8a8e9819a537": "HOME THEATRES",
    "edaa0dbf-9c84-4d4c-b70c-322b0c9bece3": "DYNAMIC",
    "36bd75dc-4329-4cc1-bc50-851a54c3d9c0": "MUSEUMS",
    "b744ac01-6a7f-4be1-a683-b29f5d31ad2d": "LUXURY CARS RETAIL",
    "4a185127-c04b-4ae9-9d1e-8838977e6927": "FOCUS",
    "b50784be-bc4d-4a49-8c9a-dcb8bac2426c": "S LOUVERS",
    "1b0120ad-c5ba-4900-b021-812bcf456095": "MATT",
    "5ca16fde-7a98-48f1-a4ec-624dccf1061c": "SCHOOLS",
    "8309890c-e689-472e-9574-ff1635b64b33": "GRILLE",
    "c7e4a600-02a6-47a2-9de4-7fe217df1e3d": "TRESPA by APP",
    "79243118-4063-446a-8792-2931d47d7915": "WASHROOMS",
    "1929416d-7612-4e5c-8ef1-3c906680eabd": "MIRROR",
    "0d4d8de5-9286-4c26-b7cd-eb1b176c3646": "Barrisol by app",
    "399bfbe5-a5af-45a9-b9dc-2aa2a571f3fa": "RECTANGULAR",
    "97d7feb9-3282-4a9e-a8f5-d96d2d71fb82": "SS ROPES MESH BY DECOR",
    "8aabb22c-51f2-424c-986f-dfb2d521a278": "MIRROR APP",
    "e8312250-0ff3-40b2-a3f1-3fe14b1cbd1f": "LOUVERS by decor",
    "4ee91b5e-bd9d-4c86-907e-5e32e8490647": "RAILINGS",
    "6187eaa4-ce2b-42ce-855f-9ed94756fc12": "FLUTED",
    "8a6cca3c-5f3f-4aff-85c8-13520fbff374": "ACOUSTICS",
    "e354e2e0-f155-48dd-ada3-d0c785103131": "BACKLIT",
    "1fa5b6b1-e701-4e4a-b962-26a8c0679119": "LOUVERS by APP",
    "c8ec0a9a-3531-4779-bdb5-bd829f9e0fbf": "KITCHEN",
    "35ea2802-36de-4150-b6e8-f55ec859015f": "SS ROPE BY APP",
    "c129f4a1-b33c-4551-9f03-f42b30d78e68": "FIBER OPTICS",
    "dd95ad35-d13c-491c-b835-91468ecd5c96": "SAFETY",
    "a5fbce44-ccfb-42e1-8ac6-8fbc424329dc": "ROPES",
    "d02f08ec-cb4a-4c28-9b8e-2048210d733c": "TRESPA by decor",
    "228cdd63-a392-4a67-8b7c-25ab3ed941f0": "GATES",
    "b607ad61-d1a3-415f-a4af-42a7f65aa70b": "HOSPITALS",
    "441cd724-caac-4dd1-b5dc-00f2200f7280": "AEROFOIL",
    "09b85454-abb9-4ea3-a5ad-cbaeedc80b79": "LIGHT LINES",
    "a8c22835-3932-4e24-bf81-e8f27b7ff1f4": "METALLICS",
    "fd090b3d-02a7-4a8d-8851-ac0869d7193d": "AIRPORTS",
    "38ff3002-6e61-453b-8bb5-90294bdb7412": "RESIDENTIAL",
    "2052d1e5-68b1-4cd1-b731-fe57ad13f5b2": "3D FORMS",
    "8865e394-c711-4c22-ac68-3d97d22ec905": "Barrisol by decor",
    "bbd2656d-3142-44b0-9c58-5a7d2ee54816": "CORPORATE OFFICE",
    "f33500c7-6e00-42ed-bcdb-fe74f6147102": "WOOD DECOR",
    "da704db3-f93e-46a1-89b1-7fc1e4953902": "LEISURE ROOMS",
    "27b4fcfe-5cdf-4e61-a261-d661b093e71e": "PRINCIPALS",
    "bb4ceca7-c199-4bd9-b831-b152715b6179": "SWIMMING POOLS",
    "bc956fbb-3b00-4086-8128-5c71ecaa6c71": "RESTURANT",
    "ab6382d3-6d61-443c-81fb-04b3d46034ba": "PRINTED",
    "a8fd559d-4de7-4bb5-a808-b587cc9ef831": "COMMERCIAL",
    "0f635f7e-9926-477a-84ed-c871c9ee747a": "CLIM",
    "9ef8b8fe-5819-4278-89d2-bb17e29e5232": "NATURALS",
    "4f9b54ac-314f-481e-a3fc-446f1deb1281": "LIFESTYLE RETAIL",
    "ece308e7-29ea-44b8-846f-f96eb1c9ea07": "LACQUER",
    "e801f543-1a90-49fb-b876-c9a49cb2052a": "BEDROOM",
    "143ba14e-73ac-4180-a80d-b8035bbfddd8": "LUMEN",
    "cbd16523-14ad-4330-bb8c-49ce2ddbc313": "FACADE",
    "935a23eb-de1a-41c7-ad6b-b8d0b514dacc": "BOOTHS/PAVILIONS",
    "4aed562b-2efa-462b-9693-f79dbcbc32eb": "LAMPS",
    "73eda619-ec4f-4b80-86a9-798f11aed310": "CAR PARKING",
    "aa9de25d-7e58-4b94-a0b0-79f9ed527194": "GREENERY",
    "ab2a6dbb-4016-4f6b-bacc-2d41770c831f": "DRAWING ROOMS",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Explore",
    "61d7637c-9748-44f1-b818-185844493ded": "UNI COLOUR",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);