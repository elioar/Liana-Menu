(function () {
  "use strict";

  var LANGUAGE_STORAGE_KEY = "lianaMenuLanguage";
  var TITLE_BY_LANGUAGE = {
    en: "Toli Family Tavern Menu | Ofrinio, Kavala",
    el: "Μενού Toli Family Tavern | Οφρύνιο, Καβάλα",
    de: "Speisekarte Toli Family Tavern | Ofrinio, Kavala",
  };

  var EL_PLACEHOLDER_TRANSLATIONS = {
    "e.g. John": "π.χ. Γιάννης",
    "e.g. John@example.com": "π.χ. giannis@example.com",
    "e.g. + 123 456 8792": "π.χ. +30 69 1234 5678",
  };

  var DE_PLACEHOLDER_TRANSLATIONS = {
    "e.g. John": "z. B. Hans",
    "e.g. John@example.com": "z. B. hans@example.com",
    "e.g. + 123 456 8792": "z. B. +49 170 1234567",
  };

  var EL_TRANSLATIONS = {
    Home: "Αρχική",
    menu: "μενού",
    "Contact Us": "Επικοινωνία",
    "book a table": "κλείστε τραπέζι",
    "SEE THE MENU": "ΔΕΙΤΕ ΤΟ ΜΕΝΟΥ",
    "taste the best that surprise you": "δοκιμάστε τις καλύτερες γεύσεις που θα σας εκπλήξουν",
    "our special": "τα ξεχωριστά μας",
    Vegetarian: "Χορτοφαγικό",
    "No meat or fish": "Χωρίς κρέας ή ψάρι",
    "Contains Dairy": "Περιέχει γαλακτοκομικά",
    "Milk & dairy products": "Γάλα & γαλακτοκομικά προϊόντα",
    Spicy: "Πικάντικο",
    "Hot & spicy dish": "Καυτερό & πικάντικο πιάτο",
    Starters: "Ορεκτικά",
    Salads: "Σαλάτες",
    Soups: "Σούπες",
    Seafood: "Θαλασσινά",
    seafood: "θαλασσινά",
    Fishes: "Ψάρια",
    Meats: "Κρεατικά",
    Pasta: "Ζυμαρικά",
    Juices: "Χυμοί",
    Refreshments: "Αναψυκτικά",
    Beers: "Μπύρες",
    "Alcoholic Drinks": "Αλκοολούχα Ποτά",
    Wine: "Κρασί",
    "menu & pricing": "μενού & τιμές",
    "Menu & Pricing": "Μενού & Τιμές",
    "reserve a table": "κράτηση τραπεζιού",
    "reserve now your table and": "κάντε τώρα κράτηση και",
    "enjoy dining experience.": "απολαύστε την εμπειρία φαγητού.",
    "open hours": "ώρες λειτουργίας",
    "Mon - Thu": "Δευ - Πεμ",
    "Fri - Sat": "Παρ - Σαβ",
    Sun: "Κυρ",
    Closed: "Κλειστά",
    "your name": "το όνομά σας",
    "email address": "διεύθυνση email",
    "phone number": "τηλέφωνο",
    date: "ημερομηνία",
    time: "ώρα",
    "Number Of Person": "Αριθμός Ατόμων",
    "number of person": "αριθμός ατόμων",
    "Select time": "Επιλέξτε ώρα",
    "1 Person": "1 Άτομο",
    "5 Person": "5 Άτομα",
    "10 Person": "10 Άτομα",
    "15 Person": "15 Άτομα",
    "20 Person": "20 Άτομα",
    "reserve now": "κράτηση τώρα",
    "Copyright © 2026 All Rights Reserved.": "Πνευματικά δικαιώματα 2026. Με επιφύλαξη παντός δικαιώματος.",
    "Copyright Â© 2026 All Rights Reserved.": "Πνευματικά δικαιώματα 2026. Με επιφύλαξη παντός δικαιώματος.",
    "Spicy peppers": "Καυτερές πιπεριές",
    "Grilled feta": "Φέτα σχάρας",
    "Feta cheese": "Φέτα Ψητή",
    "Cheese fritters": "Τυροκροκέτες",
    "Fried potatoes": "Τηγανητές πατάτες",
    "Halloumi cheese": "Τυρί χαλούμι",
    "Talagani cheese": "Τυρί ταλαγάνι",
    "Kefalotyri Saganaki": "Κεφαλοτύρι σαγανάκι",
    Tzatziki: "Τζατζίκι",
    Taramosalata: "Ταραμοσαλάτα",
    "Aubergine Spread": "Μελιτζανοσαλάτα",
    "Cheese Salad Spread": "Τυροσαλάτα",
    "Stuffed Vine Leaves": "Ντολμαδάκια",
    "Boiled Greens": "Βραστά χόρτα",
    "Fried Courgettes": "Τηγανητά κολοκυθάκια",
    "Grilled Mushrooms": "Μανιτάρια σχάρας",
    "Roast Stuffed Aubergine": "Ψητή γεμιστή μελιτζάνα",
    "Stuffed Mushrooms": "Γεμιστά μανιτάρια",
    "Stuffed Potato": "Γεμιστή πατάτα",
    "Feta with Phyllo Crust": "Φέτα σε φύλλο κρούστας",
    "Zucchini Patties": "Κολοκυθοκεφτέδες",
    Buyurdi: "Μπουγιουρντί",
    Bruschetta: "Μπρουσκέτα",
    "Cucumber - Tomato Salad": "Αγγουροντομάτα",
    "Greek Salad": "Ελληνική σαλάτα",
    "Green Salad": "Πράσινη σαλάτα",
    "Caesar's Salad": "Σαλάτα Καίσαρα",
    "Cretan Dakos": "Κρητικός ντάκος",
    "Liana Salad": "Σαλάτα Λιάνα",
    "Salad with Manouri Cheese": "Σαλάτα με μανούρι",
    "Salad with Prawns": "Σαλάτα με γαρίδες",
    "Politiki Salad": "Πολίτικη σαλάτα",
    "Cold Yoghurt Soup": "Κρύα σούπα γιαουρτιού",
    "Boiled Beef Soup": "Βραστή μοσχαρόσουπα",
    "Chicken Soup": "Κοτόσουπα",
    "Fish Soup": "Ψαρόσουπα",
    Anchovies: "Αντζούγιες",
    "Marinated Anchovies": "Μαριναρισμένες αντζούγιες",
    "Sardine Fillets": "Φιλέτα σαρδέλας",
    "Smoked Mackerel": "Καπνιστό σκουμπρί",
    "Salted Cured Tuna": "Παστωμένος τόνος",
    "Grilled Sardines": "Σαρδέλες σχάρας",
    "Grilled Gilt-Head Bream": "Τσιπούρα σχάρας",
    "Grilled Sea Bass": "Λαβράκι σχάρας",
    "Grilled Red Snapper": "Φαγκρί σχάρας",
    "Fried Anchovy": "Τηγανητός γαύρος",
    "Red Mullet": "Μπαρμπούνι",
    "Fried Cod": "Τηγανητός μπακαλιάρος",
    "Grilled Swordfish": "Ξιφίας σχάρας",
    "Grilled Squid": "Καλαμάρι σχάρας",
    "Stuffed Squid": "Γεμιστό καλαμάρι",
    "Fried Squid": "Τηγανητό καλαμάρι",
    "Grilled Octopus": "Χταπόδι σχάρας",
    "Steamed Mussels": "Μύδια αχνιστά",
    "Mussels in Saganaki": "Μύδια σαγανάκι",
    Horiatiki: "Χωριάτικη",
    "Shrimp Saganaki": "Γαρίδες σαγανάκι",
    "Grilled Prawns": "Γαρίδες σχάρας",
    "Shrimps with Potato Crust": "Γαρίδες με κρούστα πατάτας",
    "Seafood Mix For Two": "Ποικιλία θαλασσινών για δύο",
    "Pirate's Dish": "Πειρατικό πιάτο",
    "Pork Souvlaki": "Χοιρινό σουβλάκι",
    "Chicken Souvlaki": "Κοτόπουλο σουβλάκι",
    "Chicken Fillet": "Φιλέτο κοτόπουλου",
    "Pork Neck": "Χοιρινός λαιμός",
    "Pork Belly Strips": "Λωρίδες πανσέτας",
    "Country-Style Sausage": "Χωριάτικο λουκάνικο",
    Soutzoukakia: "Σουτζουκάκια",
    "Handmade Burger": "Χειροποίητο μπιφτέκι",
    "Special Fried Pork": "Τηγανιά χοιρινή",
    "Veal Steak": "Μοσχαρίσια μπριζόλα",
    "Black Angus Fillet": "Φιλέτο Black Angus",
    "Black Angus Sirloin Steak": "Κόντρα μπριζόλα Black Angus",
    "Lamb Chops": "Αρνίσια παϊδάκια",
    "Selection of Meat Dishes (for two)": "Ποικιλία κρεατικών (για δύο)",
    Napolitana: "Ναπολιτάνα",
    Bolognese: "Μπολονέζ",
    Carbonara: "Καρμπονάρα",
    "Orzo with Prawns": "Κριθαρότο με γαρίδες",
    "Mushrooms Risotto": "Ριζότο μανιταριών",
    "Seafood Risotto": "Ριζότο θαλασσινών",
    "Seafood Pasta": "Ζυμαρικά θαλασσινών",
    "Cover Charge": "Κουβέρ",
    Orange: "Πορτοκάλι",
    Apple: "Μήλο",
    Banana: "Μπανάνα",
    Peach: "Ροδάκινο",
    Mixed: "Ανάμεικτος",
    "Water 500ml": "Νερό 500ml",
    "Water 1L": "Νερό 1L",
    "Tsipouro 200ml": "Τσίπουρο 200ml",
    "Tsipouro glass 80ml": "Τσίπουρο ποτήρι 80ml",
    "Without anise.": "Χωρίς γλυκάνισο.",
    "Apostolaki Tsipouro": "Τσίπουρο Αποστολάκη",
    "Ouzo 12": "Ούζο 12",
    "Ouzo Mini": "Ούζο Mini",
    "Ouzo Plomari": "Ούζο Πλωμάρι",
    "Ouzo glass 80ml": "Ούζο ποτήρι 80ml",
    "Ouzo Georgiadi 50ml": "Ούζο Γεωργιάδη 50ml",
    "Metaxa 5* 50ml": "Μεταξά 5* 50ml",
    "Retsina Kechribari 500ml": "Ρετσίνα Κεχριμπάρι 500ml",
    "Retsina Malamatina 500ml": "Ρετσίνα Μαλαματίνα 500ml",
    "Retsina Vasiliki 500ml": "Ρετσίνα Βασιλική 500ml",
    "Red dry glass": "Κόκκινο ξηρό ποτήρι",
    "Red dry 500ml": "Κόκκινο ξηρό 500ml",
    "Red semisweet glass": "Κόκκινο ημίγλυκο ποτήρι",
    "Red semisweet 500ml": "Κόκκινο ημίγλυκο 500ml",
    "White dry glass": "Λευκό ξηρό ποτήρι",
    "White dry 500ml": "Λευκό ξηρό 500ml",
    "White semisweet glass": "Λευκό ημίγλυκο ποτήρι",
    "White semisweet 500ml": "Λευκό ημίγλυκο 500ml",
    "Nestea Lemon 330ml": "Nestea Λεμόνι 330ml",
    "Nestea Peach 330ml": "Nestea Ροδάκινο 330ml",
    "Grilled green spicy peppers.": "Ψητές πράσινες καυτερές πιπεριές.",
    "Grilled feta cheese drizzled with olive oil and herbs.": "Φέτα σχάρας με ελαιόλαδο και μυρωδικά.",
    "Classic feta cheese served with olive oil and oregano.": "Κλασική φέτα με ελαιόλαδο και ρίγανη.",
    "Crispy cheese fritters served with a dip.": "Τραγανές τυροκροκέτες που σερβίρονται με σως.",
    "Crispy fried potatoes seasoned with salt.": "Τραγανές τηγανητές πατάτες με αλάτι.",
    "Grilled halloumi served with fresh grilled tomato.": "Χαλούμι σχάρας με φρέσκια ψητή ντομάτα.",
    "Grilled talagani cheese paired with sweet tomato marmalade.": "Τυρί ταλαγάνι σχάρας με γλυκιά μαρμελάδα ντομάτας.",
    "Pan-fried kefalotyri (hard cheese).": "Κεφαλοτύρι σαγανάκι.",
    "Traditional Greek yogurt dip with cucumber and garlic.": "Παραδοσιακό ελληνικό ντιπ γιαουρτιού με αγγούρι και σκόρδο.",
    "Traditional fish roe spread, smooth and flavorful.": "Παραδοσιακή ταραμοσαλάτα, βελούδινη και γευστική.",
    "Rich and creamy aubergine spread, perfect for dipping.": "Πλούσια και κρεμώδης μελιτζανοσαλάτα, ιδανική για βούτηγμα.",
    "A delightful cheese spread that pairs well with bread.": "Μια απολαυστική τυροσαλάτα που ταιριάζει ιδανικά με ψωμί.",
    "Stuffed vine leaves, a classic Greek treat.": "Ντολμαδάκια, ένα κλασικό ελληνικό έδεσμα.",
    "Seasonal boiled greens, a healthy option.": "Εποχικά βραστά χόρτα, μια υγιεινή επιλογή.",
    "Fried courgettes, crispy and golden.": "Τηγανητά κολοκυθάκια, τραγανά και χρυσαφένια.",
    "Grilled mushrooms seasoned to perfection.": "Μανιτάρια σχάρας καρυκευμένα στην εντέλεια.",
    "Roast stuffed aubergine (tomato, feta cheese, yellow cheese).": "Ψητή γεμιστή μελιτζάνα (ντομάτα, φέτα, κίτρινο τυρί).",
    "Stuffed mushrooms (feta cheese, yellow cheese).": "Γεμιστά μανιτάρια (φέτα, κίτρινο τυρί).",
    "Stuffed potato (bacon, mushrooms, thick cream, cheese).": "Γεμιστή πατάτα (μπέικον, μανιτάρια, κρέμα γάλακτος, τυρί).",
    "Zucchini patties, crispy and delicious.": "Κολοκυθοκεφτέδες, τραγανοί και νόστιμοι.",
    "Feta with phyllo crust, honey, and sesame.": "Φέτα σε φύλλο κρούστας με μέλι και σουσάμι.",
    "Feta cheese, yellow cheese, tomatoes, peppers, spicy peppers, paprika.": "Φέτα, κίτρινο τυρί, ντομάτες, πιπεριές, καυτερές πιπεριές, πάπρικα.",
    "Bruschetta (tomatoes, feta cheese, garlic, balsamic vinegar, parmesan flakes, basil).": "Μπρουσκέτα (ντομάτες, φέτα, σκόρδο, βαλσάμικο ξίδι, νιφάδες παρμεζάνας, βασιλικός).",
    "A refreshing mix of cucumber and tomato.": "Ένας δροσερός συνδυασμός από αγγούρι και ντομάτα.",
    "Classic Greek salad with cucumber, tomato, onion, peppers, feta cheese, olives, rock samphire, and capers.": "Κλασική ελληνική σαλάτα με αγγούρι, ντομάτα, κρεμμύδι, πιπεριές, φέτα, ελιές, κρίταμο και κάπαρη.",
    "Tomato, olives, peppers, feta cheese, and onion.": "Ντομάτα, ελιές, πιπεριές, φέτα και κρεμμύδι.",
    "Iceberg lettuce, chicken, bacon, sweet corn, cherry tomatoes, parmesan flakes, Caesar's sauce.": "Iceberg, κοτόπουλο, μπέικον, γλυκό καλαμπόκι, ντοματίνια, νιφάδες παρμεζάνας, σως Caesar.",
    "Traditional Cretan Dakos with tomato, olives, rocket, and creamy cheese.": "Παραδοσιακός κρητικός ντάκος με ντομάτα, ελιές, ρόκα και κρεμώδες τυρί.",
    "Lettuce mix, cherry tomatoes, sun-dried tomatoes, grated feta, and balsamic sauce with honey.": "Ανάμεικτα μαρούλια, ντοματίνια, λιαστές ντομάτες, τριμμένη φέτα και σάλτσα βαλσάμικου με μέλι.",
    "Spinach, nuts, manouri cheese, grapes, balsamic sauce.": "Σπανάκι, ξηροί καρποί, μανούρι, σταφύλι, σάλτσα βαλσάμικου.",
    "Lettuce mix, cherry tomatoes, grilled prawns, and pesto sauce.": "Ανάμεικτα μαρούλια, ντοματίνια, γαρίδες σχάρας και σάλτσα πέστο.",
    "Lettuce mix, cherry tomatoes, onions, parmesan flakes, roast vegetables, and balsamic sauce.": "Ανάμεικτα μαρούλια, ντοματίνια, κρεμμύδια, νιφάδες παρμεζάνας, ψητά λαχανικά και σάλτσα βαλσάμικου.",
    "Cabbage, carrot, peppers, celery.": "Λάχανο, καρότο, πιπεριές, σέλινο.",
    "Cold yoghurt soup with bacon, cucumber, tomatoes, onions, and peppers.": "Κρύα σούπα γιαουρτιού με μπέικον, αγγούρι, ντομάτες, κρεμμύδια και πιπεριές.",
    "Boiled beef soup with veal, potato, carrot, celery, red pepper, and onion.": "Βραστή μοσχαρόσουπα με μοσχάρι, πατάτα, καρότο, σέλινο, κόκκινη πιπεριά και κρεμμύδι.",
    "Rich chicken soup with vegetable stock, rice, onion, and carrot.": "Πλούσια κοτόσουπα με ζωμό λαχανικών, ρύζι, κρεμμύδι και καρότο.",
    "Fish soup with a medley of fish, carrots, zucchini, potato, celery, and onion.": "Ψαρόσουπα με ποικιλία ψαριών, καρότα, κολοκύθι, πατάτα, σέλινο και κρεμμύδι.",
    "Fresh anchovies served with lemon and olive oil.": "Φρέσκες αντζούγιες με λεμόνι και ελαιόλαδο.",
    "Marinated anchovies served with olive oil and herbs.": "Μαριναρισμένες αντζούγιες με ελαιόλαδο και μυρωδικά.",
    "Delicious sardine fillets, perfect for sharing.": "Νόστιμα φιλέτα σαρδέλας, ιδανικά για μοίρασμα.",
    "Smoked mackerel, full of flavor.": "Καπνιστό σκουμπρί, γεμάτο γεύση.",
    "Salted cured tuna in oil, rich in taste.": "Παστωμένος τόνος σε λάδι, πλούσιος σε γεύση.",
    "Perfectly grilled sardines, bursting with flavor.": "Σαρδέλες σχάρας ψημένες άψογα, γεμάτες γεύση.",
    "Delicious gilt-head bream, grilled for maximum flavor.": "Νόστιμη τσιπούρα σχάρας για μέγιστη γεύση.",
    "Freshly grilled sea bass, a classic seafood choice.": "Φρεσκοψημένο λαβράκι σχάρας, κλασική επιλογή θαλασσινών.",
    "Grilled red snapper full of flavor and texture.": "Φαγκρί σχάρας γεμάτο γεύση και υφή.",
    "Crispy fried anchovies, deliciously seasoned.": "Τραγανός τηγανητός γαύρος, άριστα καρυκευμένος.",
    "Red mullet, fried or grilled to perfection.": "Μπαρμπούνι, τηγανητό ή ψητό στην εντέλεια.",
    "Crispy fried cod, a classic favorite.": "Τραγανός τηγανητός μπακαλιάρος, κλασική αγαπημένη επιλογή.",
    "Grilled swordfish steak, a seafood lover's delight.": "Μπριζόλα ξιφία σχάρας, απόλαυση για τους λάτρεις των θαλασσινών.",
    "Perfectly grilled squid, tender and flavorful.": "Καλαμάρι σχάρας, τρυφερό και γευστικό.",
    "Stuffed squid with cheese, tomatoes, and peppers.": "Γεμιστό καλαμάρι με τυριά, ντομάτες και πιπεριές.",
    "Crispy fried squid served with a dipping sauce.": "Τραγανό τηγανητό καλαμάρι με συνοδευτική σως.",
    "Delicately grilled octopus with a light seasoning.": "Ντελικάτο χταπόδι σχάρας με ελαφρύ καρύκευμα.",
    "Steamed mussels with garlic.": "Μύδια αχνιστά με σκόρδο.",
    "Mussels cooked in a small pan with a touch of Greek spices.": "Μύδια μαγειρεμένα σε σαγανάκι με άρωμα ελληνικών μπαχαρικών.",
    "Shrimps cooked in a small pan with flavorful ingredients.": "Γαρίδες μαγειρεμένες σε σαγανάκι με αρωματικά υλικά.",
    "Succulent grilled prawns, seasoned to perfection.": "Ζουμερές γαρίδες σχάρας, καρυκευμένες στην εντέλεια.",
    "Shrimps with potato crust, wakame, and sweet chili sauce.": "Γαρίδες με κρούστα πατάτας, wakame και σάλτσα sweet chili.",
    "A delightful assortment of seafood for two.": "Μια απολαυστική ποικιλία θαλασσινών για δύο.",
    "Saganaki with a variety of seafood for a flavor adventure.": "Σαγανάκι με ποικιλία θαλασσινών για γευστική εμπειρία.",
    "Tender pieces of pork grilled on skewers.": "Τρυφερά κομμάτια χοιρινού ψημένα σε καλαμάκι.",
    "Grilled chicken pieces skewered for a delicious meal.": "Κομμάτια κοτόπουλου στη σχάρα περασμένα σε καλαμάκι για απολαυστικό γεύμα.",
    "Tender chicken fillet grilled to juicy perfection.": "Τρυφερό φιλέτο κοτόπουλου ψημένο τέλεια.",
    "Flavorful and juicy pork neck cuts grilled to perfection.": "Γευστικός και ζουμερός χοιρινός λαιμός ψημένος άψογα.",
    "Deliciously tender pork belly strips for a hearty meal.": "Τρυφερές λωρίδες πανσέτας για χορταστικό γεύμα.",
    "Flavorful country-style sausage grilled to perfection.": "Γευστικό χωριάτικο λουκάνικο ψημένο στην εντέλεια.",
    "Greek meatballs with a rich tomato sauce.": "Σουτζουκάκια με πλούσια σάλτσα ντομάτας.",
    "Handmade burger with a perfect mix of veal and pork.": "Χειροποίητο μπιφτέκι με ιδανικό συνδυασμό μοσχαριού και χοιρινού.",
    "Fried pork with onions, peppers, and mushrooms.": "Τηγανιά χοιρινή με κρεμμύδια, πιπεριές και μανιτάρια.",
    "Premium veal steak, expertly grilled.": "Premium μοσχαρίσια μπριζόλα, άψογα ψημένη.",
    "Black Angus fillet with country potatoes and asparagus.": "Φιλέτο Black Angus με πατάτες φούρνου και σπαράγγια.",
    "Black Angus sirloin served with country potatoes and asparagus.": "Κόντρα μπριζόλα Black Angus με πατάτες φούρνου και σπαράγγια.",
    "Succulent grilled lamb chops for a rich taste.": "Ζουμερά αρνίσια παϊδάκια σχάρας για πλούσια γεύση.",
    "A delicious variety of dishes for two persons.": "Μια νόστιμη ποικιλία πιάτων για δύο άτομα.",
    "Classic Napolitana sauce for a delightful taste.": "Κλασική σάλτσα ναπολιτάνα για υπέροχη γεύση.",
    "Rich and meaty bolognese sauce over pasta.": "Πλούσια και μεστή μπολονέζ πάνω σε ζυμαρικά.",
    "Carbonara with bacon, mushrooms, and sour cream.": "Καρμπονάρα με μπέικον, μανιτάρια και κρέμα γάλακτος.",
    "Orzo pasta cooked with fresh prawns for a delightful dish.": "Κριθαρότο με φρέσκες γαρίδες για ένα απολαυστικό πιάτο.",
    "Delicious risotto made with fresh mushrooms.": "Νόστιμο ριζότο με φρέσκα μανιτάρια.",
    "Rich and creamy seafood risotto.": "Πλούσιο και κρεμώδες ριζότο θαλασσινών.",
    "Pasta with shrimps, mussels, and squid.": "Ζυμαρικά με γαρίδες, μύδια και καλαμάρι.",
    "Cover charge includes bread or pita with olive oil and oregano.": "Το κουβέρ περιλαμβάνει ψωμί ή πίτα με ελαιόλαδο και ρίγανη.",
  };

  var DE_TRANSLATIONS = {
    Home: "Startseite",
    menu: "Speisekarte",
    "Contact Us": "Kontakt",
    "book a table": "Tisch reservieren",
    "SEE THE MENU": "SPEISEKARTE ANSEHEN",
    "taste the best that surprise you": "genießen Sie die besten Geschmäcker, die Sie überraschen",
    "our special": "unsere Spezialitäten",
    Vegetarian: "Vegetarisch",
    "No meat or fish": "Ohne Fleisch oder Fisch",
    "Contains Dairy": "Enthält Milchprodukte",
    "Milk & dairy products": "Milch & Milchprodukte",
    Spicy: "Scharf",
    "Hot & spicy dish": "Scharfes Gericht",
    Starters: "Vorspeisen",
    Salads: "Salate",
    Soups: "Suppen",
    Seafood: "Meeresfrüchte",
    seafood: "Meeresfrüchte",
    Fishes: "Fisch",
    Meats: "Fleisch",
    Pasta: "Pasta",
    Juices: "Säfte",
    Refreshments: "Erfrischungsgetränke",
    Beers: "Biere",
    "Alcoholic Drinks": "Alkoholische Getränke",
    Wine: "Wein",
    "menu & pricing": "Speisekarte & Preise",
    "Menu & Pricing": "Speisekarte & Preise",
    "reserve a table": "Tisch reservieren",
    "reserve now your table and": "reservieren Sie jetzt Ihren Tisch und",
    "enjoy dining experience.": "genießen Sie ein besonderes Essen.",
    "open hours": "Öffnungszeiten",
    "Mon - Thu": "Mo - Do",
    "Fri - Sat": "Fr - Sa",
    Sun: "So",
    Closed: "Geschlossen",
    "your name": "Ihr Name",
    "email address": "E-Mail-Adresse",
    "phone number": "Telefonnummer",
    date: "Datum",
    time: "Uhrzeit",
    "Number Of Person": "Anzahl der Personen",
    "number of person": "Anzahl der Personen",
    "Select time": "Uhrzeit wählen",
    "1 Person": "1 Person",
    "5 Person": "5 Personen",
    "10 Person": "10 Personen",
    "15 Person": "15 Personen",
    "20 Person": "20 Personen",
    "reserve now": "jetzt reservieren",
    "Copyright Â© 2026 All Rights Reserved.": "Urheberrecht © 2026. Alle Rechte vorbehalten.",
    "Copyright Ã‚Â© 2026 All Rights Reserved.": "Urheberrecht © 2026. Alle Rechte vorbehalten.",

    "Spicy peppers": "Scharfe Paprika",
    "Grilled feta": "Gegrillter Feta",
    "Feta cheese": "Fetakäse",
    "Cheese fritters": "Käsekroketten",
    "Fried potatoes": "Gebratene Kartoffeln",
    "Halloumi cheese": "Halloumi",
    "Talagani cheese": "Talagani-Käse",
    "Kefalotyri Saganaki": "Kefalotyri-Saganaki",
    Tzatziki: "Tzatziki",
    Taramosalata: "Taramosalata",
    "Aubergine Spread": "Auberginencreme",
    "Cheese Salad Spread": "Käseaufstrich",
    "Stuffed Vine Leaves": "Gefüllte Weinblätter",
    "Boiled Greens": "Gekochtes Blattgemüse",
    "Fried Courgettes": "Gebratene Zucchini",
    "Grilled Mushrooms": "Gegrillte Pilze",
    "Roast Stuffed Aubergine": "Gefüllte Ofenaubergine",
    "Stuffed Mushrooms": "Gefüllte Pilze",
    "Stuffed Potato": "Gefüllte Kartoffel",
    "Feta with Phyllo Crust": "Feta im Filoteig",
    "Zucchini Patties": "Zucchini-Frikadellen",
    Buyurdi: "Bougiourdi",
    Bruschetta: "Bruschetta",
    "Cucumber - Tomato Salad": "Gurken-Tomaten-Salat",
    "Greek Salad": "Griechischer Salat",
    "Green Salad": "Grüner Salat",
    "Caesar's Salad": "Caesar-Salat",
    "Cretan Dakos": "Kretischer Dakos",
    "Liana Salad": "Liana-Salat",
    "Salad with Manouri Cheese": "Salat mit Manouri",
    "Salad with Prawns": "Salat mit Garnelen",
    "Politiki Salad": "Politiki-Salat",
    "Cold Yoghurt Soup": "Kalte Joghurtsuppe",
    "Boiled Beef Soup": "Rindersuppe",
    "Chicken Soup": "Hühnersuppe",
    "Fish Soup": "Fischsuppe",
    Anchovies: "Sardellen",
    "Marinated Anchovies": "Marinierte Sardellen",
    "Sardine Fillets": "Sardinenfilets",
    "Smoked Mackerel": "Geräucherte Makrele",
    "Salted Cured Tuna": "Gesalzener Thunfisch",
    "Grilled Sardines": "Gegrillte Sardinen",
    "Grilled Gilt-Head Bream": "Gegrillte Dorade",
    "Grilled Sea Bass": "Gegrillter Wolfsbarsch",
    "Grilled Red Snapper": "Gegrillter Schnapper",
    "Fried Anchovy": "Gebratene Sardellen",
    "Red Mullet": "Rotbarbe",
    "Fried Cod": "Gebratener Kabeljau",
    "Grilled Swordfish": "Gegrillter Schwertfisch",
    "Grilled Squid": "Gegrillter Tintenfisch",
    "Stuffed Squid": "Gefüllter Tintenfisch",
    "Fried Squid": "Frittierter Tintenfisch",
    "Grilled Octopus": "Gegrillter Oktopus",
    "Steamed Mussels": "Gedämpfte Miesmuscheln",
    "Mussels in Saganaki": "Miesmuscheln Saganaki",
    Horiatiki: "Horiatiki",
    "Shrimp Saganaki": "Garnelen Saganaki",
    "Grilled Prawns": "Gegrillte Garnelen",
    "Shrimps with Potato Crust": "Garnelen mit Kartoffelkruste",
    "Seafood Mix For Two": "Meeresfrüchteplatte für zwei",
    "Pirate's Dish": "Piratenteller",
    "Pork Souvlaki": "Schweine-Souvlaki",
    "Chicken Souvlaki": "Hähnchen-Souvlaki",
    "Chicken Fillet": "Hähnchenfilet",
    "Pork Neck": "Schweinenacken",
    "Pork Belly Strips": "Schweinebauchstreifen",
    "Country-Style Sausage": "Bauernwurst",
    Soutzoukakia: "Soutzoukakia",
    "Handmade Burger": "Hausgemachter Burger",
    "Special Fried Pork": "Spezial-Schweinepfanne",
    "Veal Steak": "Kalbssteak",
    "Black Angus Fillet": "Black-Angus-Filet",
    "Black Angus Sirloin Steak": "Black-Angus-Sirloin",
    "Lamb Chops": "Lammkoteletts",
    "Selection of Meat Dishes (for two)": "Fleischplatte (für zwei)",
    Napolitana: "Napolitana",
    Bolognese: "Bolognese",
    Carbonara: "Carbonara",
    "Orzo with Prawns": "Kritharaki mit Garnelen",
    "Mushrooms Risotto": "Pilzrisotto",
    "Seafood Risotto": "Meeresfrüchterisotto",
    "Seafood Pasta": "Meeresfrüchte-Pasta",
    "Cover Charge": "Gedeck",
    Orange: "Orange",
    Apple: "Apfel",
    Banana: "Banane",
    Peach: "Pfirsich",
    Mixed: "Gemischt",
    "Water 500ml": "Wasser 500ml",
    "Water 1L": "Wasser 1L",
    "Tsipouro 200ml": "Tsipouro 200ml",
    "Tsipouro glass 80ml": "Tsipouro Glas 80ml",
    "Without anise.": "Ohne Anis.",
    "Apostolaki Tsipouro": "Apostolaki Tsipouro",
    "Ouzo 12": "Ouzo 12",
    "Ouzo Mini": "Ouzo Mini",
    "Ouzo Plomari": "Ouzo Plomari",
    "Ouzo glass 80ml": "Ouzo Glas 80ml",
    "Ouzo Georgiadi 50ml": "Ouzo Georgiadi 50ml",
    "Metaxa 5* 50ml": "Metaxa 5* 50ml",
    "Retsina Kechribari 500ml": "Retsina Kechribari 500ml",
    "Retsina Malamatina 500ml": "Retsina Malamatina 500ml",
    "Retsina Vasiliki 500ml": "Retsina Vasiliki 500ml",
    "Red dry glass": "Rotwein trocken Glas",
    "Red dry 500ml": "Rotwein trocken 500ml",
    "Red semisweet glass": "Rotwein halbsüß Glas",
    "Red semisweet 500ml": "Rotwein halbsüß 500ml",
    "White dry glass": "Weißwein trocken Glas",
    "White dry 500ml": "Weißwein trocken 500ml",
    "White semisweet glass": "Weißwein halbsüß Glas",
    "White semisweet 500ml": "Weißwein halbsüß 500ml",
    "Nestea Lemon 330ml": "Nestea Zitrone 330ml",
    "Nestea Peach 330ml": "Nestea Pfirsich 330ml",

    "Grilled green spicy peppers.": "Gegrillte grüne scharfe Paprika.",
    "Crispy fried potatoes seasoned with salt.": "Knusprig gebratene Kartoffeln mit Salz.",
    "Traditional Greek yogurt dip with cucumber and garlic.": "Traditioneller griechischer Joghurt-Dip mit Gurke und Knoblauch.",
    "Traditional fish roe spread, smooth and flavorful.": "Traditioneller Fischrogenaufstrich, cremig und aromatisch.",
    "Rich and creamy aubergine spread, perfect for dipping.": "Reichhaltiger und cremiger Auberginenaufstrich, perfekt zum Dippen.",
    "Stuffed vine leaves, a classic Greek treat.": "Gefüllte Weinblätter, eine klassische griechische Spezialität.",
    "Seasonal boiled greens, a healthy option.": "Saisonales gekochtes Blattgemüse, eine gesunde Wahl.",
    "Fried courgettes, crispy and golden.": "Gebratene Zucchini, knusprig und goldbraun.",
    "Steamed mussels with garlic.": "Gedämpfte Miesmuscheln mit Knoblauch.",
    "Crispy fried squid served with a dipping sauce.": "Knusprig frittierter Tintenfisch mit Dip.",
    "Perfectly grilled squid, tender and flavorful.": "Perfekt gegrillter Tintenfisch, zart und aromatisch.",
    "Succulent grilled prawns, seasoned to perfection.": "Saftige gegrillte Garnelen, perfekt gewürzt.",
    "A delightful assortment of seafood for two.": "Eine köstliche Meeresfrüchteauswahl für zwei Personen.",
    "Tender pieces of pork grilled on skewers.": "Zarte Schweinefleischstücke am Spieß gegrillt.",
    "Tender chicken fillet grilled to juicy perfection.": "Zartes Hähnchenfilet, saftig gegrillt.",
    "Classic Napolitana sauce for a delightful taste.": "Klassische Napolitana-Sauce für ein hervorragendes Aroma.",
    "Rich and meaty bolognese sauce over pasta.": "Kräftige Bolognese mit Fleisch über Pasta.",
    "Carbonara with bacon, mushrooms, and sour cream.": "Carbonara mit Speck, Pilzen und Sauerrahm.",
    "Delicious risotto made with fresh mushrooms.": "Leckeres Risotto mit frischen Pilzen.",
    "Rich and creamy seafood risotto.": "Reichhaltiges und cremiges Meeresfrüchterisotto.",
    "Pasta with shrimps, mussels, and squid.": "Pasta mit Garnelen, Miesmuscheln und Tintenfisch.",
    "Cover charge includes bread or pita with olive oil and oregano.": "Gedeck beinhaltet Brot oder Pita mit Olivenöl und Oregano."
  };

  var TEXT_TRANSLATIONS_BY_LANGUAGE = {
    el: EL_TRANSLATIONS,
    de: DE_TRANSLATIONS,
  };

  var PLACEHOLDER_TRANSLATIONS_BY_LANGUAGE = {
    el: EL_PLACEHOLDER_TRANSLATIONS,
    de: DE_PLACEHOLDER_TRANSLATIONS,
  };

  function normalizeText(value) {
    return (value || "").replace(/\s+/g, " ").trim();
  }

  function getStoredLanguage() {
    try {
      return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function setStoredLanguage(language) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
      // Ignore storage failures (private mode, restricted browsers).
    }
  }

  function createTextNodeRecords() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var parent = node.parentElement;
          var normalized = normalizeText(node.nodeValue);

          if (!parent || !normalized) {
            return NodeFilter.FILTER_REJECT;
          }

          if (parent.closest(".language-switcher, .mobile-language-switcher")) {
            return NodeFilter.FILTER_REJECT;
          }

          if (parent.tagName === "SCRIPT" || parent.tagName === "STYLE" || parent.tagName === "NOSCRIPT") {
            return NodeFilter.FILTER_REJECT;
          }

          if (/^[-+0-9.,:€/ ]+$/.test(normalized) || /^â‚¬/.test(normalized)) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      }
    );

    var records = [];
    while (walker.nextNode()) {
      var node = walker.currentNode;
      var original = node.nodeValue || "";
      records.push({
        node: node,
        key: normalizeText(original),
        original: original,
        leading: (original.match(/^\s*/) || [""])[0],
        trailing: (original.match(/\s*$/) || [""])[0],
      });
    }

    return records;
  }

  function initLanguageSwitcher() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang-btn[data-lang]"));
    if (!buttons.length) {
      return;
    }

    var textNodeRecords = createTextNodeRecords();
    var placeholderRecords = Array.prototype.slice.call(document.querySelectorAll("[placeholder]")).map(function (element) {
      return {
        element: element,
        original: element.getAttribute("placeholder") || "",
      };
    });

    function applyLanguage(language) {
      var currentLanguage = language === "el" || language === "de" ? language : "en";
      var textTranslations = TEXT_TRANSLATIONS_BY_LANGUAGE[currentLanguage] || null;
      var placeholderTranslations = PLACEHOLDER_TRANSLATIONS_BY_LANGUAGE[currentLanguage] || null;

      textNodeRecords.forEach(function (record) {
        if (!textTranslations) {
          record.node.nodeValue = record.original;
          return;
        }

        var translated = textTranslations[record.key];
        if (translated) {
          record.node.nodeValue = record.leading + translated + record.trailing;
        } else {
          record.node.nodeValue = record.original;
        }
      });

      placeholderRecords.forEach(function (record) {
        if (!placeholderTranslations) {
          record.element.setAttribute("placeholder", record.original);
          return;
        }

        var translated = placeholderTranslations[record.original];
        if (translated) {
          record.element.setAttribute("placeholder", translated);
        } else {
          record.element.setAttribute("placeholder", record.original);
        }
      });

      document.documentElement.setAttribute("lang", currentLanguage);
      document.title = TITLE_BY_LANGUAGE[currentLanguage] || TITLE_BY_LANGUAGE.en;

      buttons.forEach(function (button) {
        button.classList.toggle("active", button.getAttribute("data-lang") === currentLanguage);
      });

      setStoredLanguage(currentLanguage);
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        applyLanguage(button.getAttribute("data-lang"));
      });
    });

    var initialLanguage = getStoredLanguage();
    applyLanguage(initialLanguage === "el" || initialLanguage === "de" ? initialLanguage : "en");
  }

  document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
})();
