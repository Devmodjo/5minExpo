import { Component, OnInit, HostBinding } from "@angular/core";
import { NavBarComponent } from "./navigation/navbar.component";
import { DashboardThemeService } from '../../services/dashboard-theme.service';
import { RouterOutlet } from "@angular/router";



@Component({
    standalone: true,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [NavBarComponent, RouterOutlet]
})
export class DashboardComponent implements OnInit {
    constructor(public dashboardTheme: DashboardThemeService) {}

    @HostBinding('class') get hostClasses(): string {
        return this.dashboardTheme.theme() === 'dark' ? 'dashboard-dark' : 'dashboard-light';
    }

    ngOnInit(): void {}

}