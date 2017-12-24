import { ElementRef, AfterViewInit, AfterViewChecked, OnDestroy, OnInit, EventEmitter, Renderer2, ChangeDetectorRef, TemplateRef, QueryList } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/forms';
export declare const CALENDAR_VALUE_ACCESSOR: any;
export interface LocaleSettings {
    firstDayOfWeek?: number;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    today: string;
    clear: string;
}
export declare class Calendar implements AfterViewInit, AfterViewChecked, OnInit, OnDestroy, ControlValueAccessor {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    defaultDate: Date;
    style: string;
    styleClass: string;
    inputStyle: string;
    inputId: string;
    name: string;
    inputStyleClass: string;
    placeholder: string;
    disabled: any;
    dateFormat: string;
    inline: boolean;
    showOtherMonths: boolean;
    selectOtherMonths: boolean;
    showIcon: boolean;
    icon: string;
    appendTo: any;
    readonlyInput: boolean;
    shortYearCutoff: any;
    monthNavigator: boolean;
    yearNavigator: boolean;
    yearRange: string;
    hourFormat: string;
    timeOnly: boolean;
    stepHour: number;
    stepMinute: number;
    stepSecond: number;
    showSeconds: boolean;
    required: boolean;
    showOnFocus: boolean;
    dataType: string;
    utc: boolean;
    selectionMode: string;
    maxDateCount: number;
    showButtonBar: boolean;
    todayButtonStyleClass: string;
    clearButtonStyleClass: string;
    autoZIndex: boolean;
    baseZIndex: number;
    panelStyleClass: string;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onSelect: EventEmitter<any>;
    onInput: EventEmitter<any>;
    onTodayClick: EventEmitter<any>;
    onClearClick: EventEmitter<any>;
    onMonthChange: EventEmitter<any>;
    templates: QueryList<any>;
    _locale: LocaleSettings;
    tabindex: number;
    overlayViewChild: ElementRef;
    inputfieldViewChild: ElementRef;
    value: any;
    dates: any[];
    weekDays: string[];
    currentMonthText: string;
    currentMonth: number;
    currentYear: number;
    currentHour: number;
    currentMinute: number;
    currentSecond: number;
    pm: boolean;
    overlay: HTMLDivElement;
    overlayVisible: boolean;
    overlayShown: boolean;
    datepickerClick: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    calendarElement: any;
    documentClickListener: any;
    ticksTo1970: number;
    yearOptions: number[];
    focus: boolean;
    isKeydown: boolean;
    filled: boolean;
    inputFieldValue: string;
    _minDate: Date;
    _maxDate: Date;
    _showTime: boolean;
    preventDocumentListener: boolean;
    dateTemplate: TemplateRef<any>;
    _disabledDates: Array<Date>;
    _disabledDays: Array<number>;
    minDate: Date;
    maxDate: Date;
    disabledDates: Date[];
    disabledDays: number[];
    showTime: boolean;
    locale: LocaleSettings;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngAfterContentInit(): void;
    createWeekDays(): void;
    createMonth(month: number, year: number): void;
    initTime(date: Date): void;
    prevMonth(event: any): void;
    nextMonth(event: any): void;
    onDateSelect(event: any, dateMeta: any): void;
    shouldSelectDate(dateMeta: any): boolean;
    updateInputfield(): void;
    formatDateTime(date: any): any;
    selectDate(dateMeta: any): void;
    updateModel(value: any): void;
    getFirstDayOfMonthIndex(month: number, year: number): number;
    getDaysCountInMonth(month: number, year: number): number;
    getDaysCountInPrevMonth(month: number, year: number): number;
    getPreviousMonthAndYear(month: number, year: number): {
        'month': any;
        'year': any;
    };
    getNextMonthAndYear(month: number, year: number): {
        'month': any;
        'year': any;
    };
    getSundayIndex(): number;
    isSelected(dateMeta: any): boolean;
    isDateEquals(value: any, dateMeta: any): boolean;
    isDateBetween(start: any, end: any, dateMeta: any): boolean;
    isSingleSelection(): boolean;
    isRangeSelection(): boolean;
    isMultipleSelection(): boolean;
    isToday(today: any, day: any, month: any, year: any): boolean;
    isSelectable(day: any, month: any, year: any): boolean;
    isDateDisabled(day: number, month: number, year: number): boolean;
    isDayDisabled(day: number, month: number, year: number): boolean;
    onInputFocus(event: Event): void;
    onInputBlur(event: Event): void;
    onButtonClick(event: any, inputfield: any): void;
    onInputKeydown(event: any): void;
    onMonthDropdownChange(m: string): void;
    onYearDropdownChange(y: string): void;
    incrementHour(event: any): void;
    decrementHour(event: any): void;
    validateHour(hour: any): boolean;
    incrementMinute(event: any): void;
    decrementMinute(event: any): void;
    validateMinute(minute: any): boolean;
    incrementSecond(event: any): void;
    decrementSecond(event: any): void;
    validateSecond(second: any): boolean;
    updateTime(): void;
    toggleAMPM(event: any): void;
    onUserInput(event: any): void;
    parseValueFromString(text: string): Date;
    parseDateTime(text: any): Date;
    populateTime(value: any, timeString: any, ampm: any): void;
    updateUI(): void;
    onDatePickerClick(event: any): void;
    showOverlay(): void;
    alignOverlay(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    formatDate(date: any, format: any): string;
    formatTime(date: any): string;
    parseTime(value: any): {
        hour: number;
        minute: number;
        second: number;
    };
    parseDate(value: any, format: any): any;
    daylightSavingAdjust(date: any): any;
    updateFilledState(): void;
    onTodayButtonClick(event: any): void;
    onClearButtonClick(event: any): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    ngOnDestroy(): void;
}
export declare class CalendarModule {
}