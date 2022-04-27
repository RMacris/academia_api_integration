import React from 'react';
import '../components/navbar-menu/navbar.css';

// criar uma pagina de contato
export function Contatos() {
    // create a contact page
    return (
        <div className="container-centro" >
            <div class="row">
                <div class="col-sm-4">
                    {/* Card do RAFAEL */}
                    <div class="card">
                        <img class="card-img-top" src="https://avatars.githubusercontent.com/u/39390097?v=4" alt="Rafael" />
                        <div class="card-body">
                            <h5 class="card-title">Rafael Macris</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <label>rafa.macris@gmail.com</label>
                            <li class="list-group-item">
                                <a class="card-link" href="http://github.com/RMacris">Github Profile</a>
                            </li>
                            <li class="list-group-item">
                                <a class="card-link" href="https://www.linkedin.com/in/rafael-soares-66289013a/">LinkedIn Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Card do IGOR */}
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="https://avatars.githubusercontent.com/u/81436151?v=4" alt="Igor" />
                        <div class="card-body">
                            <h5 class="card-title">Igor Campos</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <label>igorcampos20016@gmail.com</label>
                            <li class="list-group-item">
                                <a class="card-link" href="http://github.com/igorcampos20016">Github Profile</a>
                            </li>
                            <li class="list-group-item">
                                <a class="card-link" href="https://www.linkedin.com/in/igor-campos-675b62198">LinkedIn Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Card do JHACK */}
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src="https://avatars.githubusercontent.com/u/81493644?v=4" alt="Jhack" />
                        <div class="card-body">
                            <h5 class="card-title">Jhack Costa</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <label>jhacktibia@gmail.com</label>
                            <li class="list-group-item">
                                <a class="card-link" href="http://github.com/JhackCosta">Github Profile</a>
                            </li>
                            <li class="list-group-item">
                                <a class="card-link" href="https://www.linkedin.com/in/jhack-costa/">LinkedIn Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Card do WANDBERG */}
                <div class="row alinha">
                    <div class="col-sm-4">
                        <div class="card">
                            <img class="card-img-top" src="https://avatars.githubusercontent.com/u/77651192?v=4" alt="Wandberg" />
                            <div class="card-body">
                                <h5 class="card-title">Wandberg de Lima</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <label>wandberg@gmail.com</label>
                                <li class="list-group-item">
                                    <a class="card-link" href="http://github.com/wandbergdelima">Github Profile</a>
                                </li>
                                <li class="list-group-item">
                                    <a class="card-link" href="https://www.linkedin.com/in/wandberg-de-lima-1a5a52177/">LinkedIn Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Card do IAGO VIANA */}
                    <div class="col-sm-4">
                        <div class="card">
                            <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4E03AQFnuTNtiOKpHg/profile-displayphoto-shrink_200_200/0/1641355844395?e=1656547200&v=beta&t=B6YapUs4-cOh_rCFcuzv0QUH9eUdIjcSbQyArezLeE4" alt="Imagem de capa do card" />
                            <div class="card-body">
                                <h5 class="card-title">Iago Viana</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <label>iago.viana.dev@gmail.com</label>
                                <li class="list-group-item">
                                    <a class="card-link" href="http://github.com/Vastier">Github Profile</a>
                                </li>
                                <li class="list-group-item">
                                    <a class="card-link" href="https://www.linkedin.com/in/vastier/">LinkedIn Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}