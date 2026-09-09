import { Component } from "@angular/core";


@Component({
        selector: 'dashboard-navbar',
        template: `
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="avatar">VW</div>
                <div class="user-info">
                    <div class="title">Victor Modjo's Workspace</div>
                    <button class="upgrade">Passez à la version supérieure</button>
                
                </div>
            </div>

            <nav class="sidebar-nav">
                <ul>
                    <li>
                        <span class="icon">${folderIcon()}</span>
                        <span class="label">QuickExpo</span>
                    </li>
                    <li>
                        <span class="icon">${searchIcon()}</span>
                        <span class="label">Recherche</span>
                    </li>
                    <li>
                        <span class="icon">${peopleIcon()}</span>
                        <span class="label">Partagés avec vous</span>
                    </li>
                    <li>
                        <span class="icon">${globeIcon()}</span>
                        <span class="label">Sites</span>
                    </li>
                    <!-- <li>
                        <span class="icon">${codeIcon()}</span>
                        <span class="label">Générés par l'API</span>
                    </li> -->
                </ul>
            </nav>

            <!-- <div class="sidebar-section">
                <div class="section-title">DOSSIERS</div>
                <div class="dossier-card">
                    <div class="dossier-content">Organisez vos gammas par sujet et partagez-les avec votre équipe.</div>
                    <button class="dossier-action">Créer ou intégrer un dossier</button>
                </div>
            </div> -->

            <div class="sidebar-footer">
                <button class="trash">${trashIcon()} Corbeille</button>
            </div>
        </aside>
        `,
        styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {


}




/* Inline SVG helpers so template stays simple and no extra deps are required. */
function folderIcon() {
    return `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
            <path d="M3 7a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path>
        </svg>`;
}

function searchIcon() {
    return `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>`;
}

function peopleIcon() {
    return `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
            <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>`;
}

function globeIcon() {
    return `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
        </svg>`;
}

function codeIcon() {
    return `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>`;
}

function trashIcon() {
    return `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
        </svg>`;
}
