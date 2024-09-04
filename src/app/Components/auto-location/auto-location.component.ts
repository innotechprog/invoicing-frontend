import { Component, AfterViewInit, ViewChild, ElementRef,forwardRef, NgZone } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auto-location',
  templateUrl: './auto-location.component.html',
  styleUrl: './auto-location.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoLocationComponent),
      multi: true
    }
  ]
})
export class AutoLocationComponent implements AfterViewInit, ControlValueAccessor{
  //start Allowing the component to change the ngModel
  value: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabling if needed
  }

  updateValue(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.onChange(newValue);
  }
  //end

  @ViewChild('autocomplete', { static: false }) autocompleteInput!: ElementRef;
  autocomplete!: google.maps.places.Autocomplete;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    if (this.autocompleteInput && this.autocompleteInput.nativeElement) {
      this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.nativeElement, {
        types: ['address']
      });

      this.autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log('Address:', place.formatted_address);
        });
      });
    } else {
      console.error('Autocomplete input element not found.');
    }
  }
}