
import {BrowserRouter, BrowserRouter as Router,Route} from 'react-router-dom'
import {Dashboard} from './component/admin/Dashboard'
import {PageUser} from './component/admin/PageUser'
import {ListCommande} from './component/admin/listCommande/ListCommande'
import { AddProduct } from './component/admin/addProduct/AddProduct';
import {ListProduits} from './component/admin/listPrduits/ListProduits'
import {DashboardSuperAdmin} from './component/superAdmin/DashboardSuperAdmin'
import {AddCategory} from './component/superAdmin/addCategory/AddCategory'
import {GererBoutique} from './component/superAdmin/gererBoutique/GererBoutique'
import {ListBoutiqueActif} from './component/superAdmin/gererBoutique/ListBoutiqueActif'
import {AddEvent} from './component/superAdmin/addEvent/AddEvent'
import {GererEvenement} from './component/superAdmin/gererEvenement/GererEvenement'
import { Index } from './component/pageAcceuil/Index';
import { ProduitDetails } from './component/productDetails/ProduitDetail';
import { CreerBoutique } from './component/authentification/CreerBoutique';
import { Login } from './component/authentification/Login';
import { FiltreProduits } from './component/filtre/FiltreProduits';
import { Boutique } from './component/Boutique/Boutique';
import { Event } from './component/Event/Event';
import { ListBoutique } from './component/superAdmin/gererBoutique/ListBoutique';
import { ListCategory } from './component/superAdmin/addCategory/ListCategory';
import { ListSousCategory } from './component/superAdmin/addCategory/ListSousCategory';
import { ListEvent } from './component/superAdmin/addEvent/ListEvent';
import {ProctectedAdmin} from './component/admin/ProctectedAdmin'
import {ProtectedSuperAdmin} from './component/superAdmin/ProtectedSuperAdmin'
import {Attende} from './component/en attende/Attende'
import { Page } from './component/en attende/Page';
import { UpdateProduct } from './component/admin/addProduct/UpdateProduct';
import { Reservation } from './component/Event/Reservation';
import { ListReservation } from './component/superAdmin/gererEvenement/ListReservation';
import { StatusBoutique } from './component/superAdmin/gererBoutique/StatusBoutique';
import { ListBoutiqueInactif } from './component/superAdmin/gererBoutique/ListBoutiqueInactif';
import { UpdateCategory } from './component/superAdmin/addCategory/UpdateCategory';
import { UpdateSousCategory } from './component/superAdmin/addCategory/UpdateSousCategory';
import { UpdateEvent } from './component/superAdmin/addEvent/UpdateEvent';
import { Cart } from './component/Boutique/Cart';
import { Search } from './component/filtre/Search';
import { FiltreSousCategory } from './component/filtre/FiltreSousCategory';
import { ArticleFilter } from "./component/filtre/ArticleFilter";
import { PageEnContruction } from './component/annonce/PageEnContruction';
function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Route path="/admin/ajouter-produits" exact component={AddProduct} />
        <Route path="/admin/tableau-de-bord" exact component={Dashboard} />
        <Route path="/modifier-produit:id" exact component={UpdateProduct} />
        <Route path="/admin/vos-commande" exact component={ListCommande} />
        <Route path="/admin/profil-user" exact component={PageUser} />
        <Route path="/admin/list-produits" exact component={ListProduits} />

        <Route path="/" exact component={Index} />
        <Route path="/creer-boutique" exact component={CreerBoutique} />
        <Route path="/connexion" exact component={Login} />
        <Route path="/boutique" exact component={Boutique} />
        <Route path="/evenement" exact component={Event} />
        <Route path="/reservation:id" exact component={Reservation} />
        <Route path="/filtre-categories" exact component={FiltreProduits} />
        <Route path="/filtre-sous-cat:id" exact component={FiltreSousCategory} />
        <Route path="/articles-filtre:id" exact component={ArticleFilter} />
        <Route path="/details:id" exact component={ProduitDetails} />
        <Route path="/list-panier" exact component={Cart} />
        <Route path="/search" exact component={Search} />
        <Route path="/page-en-construction" exact component={PageEnContruction} />

        <Attende path="/page" exact component={Page} />

        
        <ProtectedSuperAdmin path="/admins/tableau-de-bord" exact component={DashboardSuperAdmin} />
        <ProtectedSuperAdmin path="/admins/ajouter-categorie" exact component={AddCategory} />
        <ProtectedSuperAdmin path="/admins/modifier-categorie:id" exact component={UpdateCategory} />
        <ProtectedSuperAdmin path="/admins/Gerer-boutique" exact component={GererBoutique} />
        <ProtectedSuperAdmin path="/admins/list-boutique-ative" exact component={ListBoutiqueActif} />
        <ProtectedSuperAdmin path="/admins/list-boutique-inactif" exact component={ListBoutiqueInactif} />
        <ProtectedSuperAdmin path="/admins/list-Categorys" exact component={ListCategory} />
        <ProtectedSuperAdmin path="/admins/list-sous-Categorys" exact component={ListSousCategory} />
        <ProtectedSuperAdmin path="/admins/modifier-sous-Categorys:id" exact component={UpdateSousCategory} />
        <ProtectedSuperAdmin path="/admins/listBoutique" exact component={ListBoutique} />
        <ProtectedSuperAdmin path="/admins/Ajouter-event" exact component={AddEvent} />
        <ProtectedSuperAdmin path="/admins/Gerer-evenement" exact component={GererEvenement} />
        <ProtectedSuperAdmin path="/admins/modifier-evenement:id" exact component={UpdateEvent} />
        <ProtectedSuperAdmin path="/admins/list-event" exact component={ListEvent} />
        <ProtectedSuperAdmin path="/admins/list-reservation" exact component={ListReservation} />
        <ProtectedSuperAdmin path="/admins/status-client:id" exact component={StatusBoutique} />
      </BrowserRouter>
    </div>
  );
}

export default App;
