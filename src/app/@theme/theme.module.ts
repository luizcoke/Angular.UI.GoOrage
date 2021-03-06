import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  BoxModule,
  LayoutModule,
  MenuModule,
  SidebarModule,
  
  NbRouteTabsetModule,
  NbSearchModule,
  NbActionsModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
} from '@avanade/theme';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  ThemeSwitcherComponent,
  TinyMCEComponent,
} from './components';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';
import {
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { GO_ORANGE_THEME } from './styles/theme.go-orange';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NgbModule,
  BoxModule,
  LayoutModule,
  MenuModule,
  SidebarModule,

  NbTabsetModule,
  NbRouteTabsetModule,
  MenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbCheckboxModule,

];

const COMPONENTS = [
  ThemeSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [ DEFAULT_THEME, COSMIC_THEME, GO_ORANGE_THEME ],
  ).providers,
  ...SidebarModule.forRoot().providers,
  ...MenuModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
